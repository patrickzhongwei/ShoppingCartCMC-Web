
import { Billing } from "./../models/billing";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ThemeService } from "./theme.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class ShippingService {

  constructor(private themeService: ThemeService, private http: HttpClient) {  }

  // PW: get shipping fee price based on shopping card sum price
  /**
   * @param {number} cartSumPrice - shopping card sum price.
   * @param {string} ccy - currency of shopping card sum price.
   * @returns {Observable<number>} - return an observable of shipping fee
   */
  getShippingFee(cartSumPrice: number) : Observable<number> {

    //PW: for unit test purpose, using local test data.
    //**************************************************/
    // if (cartSumPrice < 50)
    //     return of(10);
    // else
    //     return of(20);
    /************************************************* */

    return this.requestShippingFee(cartSumPrice);
  }


  //PW: request for shipping fee
  /**
   * @param {number}  cartSumPrice - sum price of a shopping cart
   * @returns {Observable<number>} return a Observable<number> object
   */
  private requestShippingFee(cartSumPrice: number) : Observable<number> {

    let currentCcy = this.themeService.getCurrentCcy();

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let url     = `${environment.shoppingApiUrl}/api/shipping`;
    let params  = new HttpParams().set("ccyCode", currentCcy).set("cartSumPrice", cartSumPrice);

    return this.http.get<number>(url, { headers: headers, params: params });
  }

}
