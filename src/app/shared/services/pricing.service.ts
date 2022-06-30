import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import { HubConnection, HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PricingService {

  private _hubConnection: HubConnection;
  //PW: connectionState
  public connectionState$: Observable<HubConnectionState>;
  private connectionStateSubject: BehaviorSubject<HubConnectionState> = new BehaviorSubject<HubConnectionState>(HubConnectionState.Disconnected);


  constructor() {
    this.connectHub();
  }


  public connectHub(): void {
    //PW: when connect to shoppingApiUrl, have to set skipNegotiation and transport as below, or not working
    this._hubConnection = new HubConnectionBuilder()
    //.configureLogging(signalR.LogLevel.Debug)
    .withUrl(`${environment.shoppingApiUrl}/signalrPricing`, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    }).build();

    //PW: when connect to GuruHedge https://localhost:44359/signalrAnalytics, don't need to set skipNegotiation or transport.
    // both back-ends are same .Net Core API, weird!
    //this._hubConnection = new HubConnectionBuilder().withUrl('https://localhost:44359/signalrAnalytics').build();

    this._hubConnection.start()
      .then(() => {
          console.log('Hub connection started');
          this.registerHubCallbackAndInvoke();
          this.connectionStateSubject.next(HubConnectionState.Connected);
      })
      .catch(err => {
          console.log('Error while establishing Hub connection Analytics: ' + err);
          throw err;
      });
  }


  private registerHubCallbackAndInvoke(): void {

    this._hubConnection.invoke("SubscribePriceStream", "AUDUSD")
        .then(_ =>
          console.log('Invoke SubscribePriceStream() done.'))
        .catch(ex =>
          console.log(ex));


    // //PW: nopByCcy stuff
    this._hubConnection.on("OnNewPrice", price => {
      console.log(price);
    });
  }
}
