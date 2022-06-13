import { Injectable } from "@angular/core";
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
    this._hubConnection = new HubConnectionBuilder().withUrl(`${environment.shoppingApiUrl}/signalrPricing`).build();

    this._hubConnection.start()
      .then(() => {
          console.log('Hub connection started');
          this.registerHubCallbackAndInvok();
          this.connectionStateSubject.next(HubConnectionState.Connected);
      })
      .catch(err => {
          console.log('Error while establishing Hub connection Analytics: ' + err);
          //throw err;
      });
  }


  private registerHubCallbackAndInvok(): void {

    //PW: buggy below...
    // this._hubConnection.invoke("SubscribePriceStream")
    //     .then(_ =>
    //       console.log('Invoke SubscribePriceStream() done.'))
    //     .catch(ex =>
    //       console.log(ex));


    // //PW: nopByCcy stuff
    // this._hubConnection.on("OnNewPrice", price => {
    //   console.log(price);
    // });
  }
}
