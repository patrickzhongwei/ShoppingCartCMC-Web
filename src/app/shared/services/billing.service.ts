import { Billing } from "./../models/billing";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BillingFactory } from "../models/factories/billing-factory";
import { mockBilling } from "../mock_data/mock-billing";

@Injectable({
  providedIn: "root",
})
export class BillingService {

  constructor() {
  }

// PW: submit order to get executed at server
/**
 * @param {Billing} billing - billing object.
 * @returns {number} - return an obervable of error code, '0' means succeed, others mean different meanings of error message
 */
  placeOrder(billing: Billing): Observable<number> {

    //PW: generate billing json string
     let factgory: BillingFactory = new BillingFactory();

     //let billingDto = factgory.createDto(billing);
     let billingDto = mockBilling //PW: for test purpose, use mock billing

    return of(0);
  }

}
