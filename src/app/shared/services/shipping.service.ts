
import { Billing } from "./../models/billing";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShippingService {

  constructor() {  }

  // PW: get shipping fee price based on shopping card sum price
/**
 * @param {number} cartSumPrice - shopping card sum price.
 * @param {string} ccy - currency of shopping card sum price.
 * @returns {Observable<number>} - return an observable of shipping fee
 */
 getShippingFee(cartSumPrice: number, ccy: string) : Observable<number> {
  if (cartSumPrice < 50)
      return of(10);
  else
      return of(20);
}

}
