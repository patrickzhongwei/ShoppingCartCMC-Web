import { Billing } from "./../models/billing";
import { Injectable } from "@angular/core";
import { observable, Observable, of } from "rxjs";
import { BillingFactory } from "../models/factories/billing-factory";
import { mockBilling } from "../mock_data/mock-billing";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { shoppingUrl } from "src/environments/environment";
import { BillingDto } from "../models/dto/billing-dto";
import { catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class BillingService {

  constructor(private http: HttpClient) {
  }


// /** *
//  * Patrick: [not used. leave for futuer development].
//  */
// // Get market rate like AUDUSD
// /**
//  * @param {string}  ccyPair - Currency pair
//  * @returns {number} market rate like 0.68
//  */
//   getIndirectRate(ccyPair: string) : Observable<number> {

//     //PW: for unit test purpose, using local test data.
//     //**************************************************/
//     // return of(0.8);
//     /************************************************* */

//     return this.requestIndirectRate(ccyPair);
//   }


// PW: PW: make http get, retrieve ProductDto[] data from server
/**
 * @returns {} - return an Observable<Product[]> object
 */
  private requestIndirectRate(ccyPair: string) : Observable<number> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let url     = `${shoppingUrl.root}/api/market`;
    let params  = new HttpParams().set("ccyPair", ccyPair);

    return this.http.get<number>(url, { headers: headers, params: params });
  }


// PW: submit order to get executed at server
/**
 * @param {Billing} billing - billing object.
 * @returns {number} - return an obervable of error code, '0' means succeed, others mean different meanings of error message
 */
  placeOrder(billing: Billing): Observable<number> {

    //PW: for unit test purpose, using local test data.
    //**************************************************/
     return of(0);
    /************************************************* */

    //PW: generate billing json string
    // todo: buggy here, 400 error. related to serialize/deserialize json object
    //....................
     let factory: BillingFactory = new BillingFactory();
     let billingDto = factory.createDto(billing);
  }

  //PW: httpClient.put() -> update
  private submit(billingDto: BillingDto)  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let url     = `${shoppingUrl.root}/api/billing`;

    this.http.put<any>(url, billingDto)
        .subscribe({
            next: data => {
              console.log(data);
            },
            error: error => {
                console.error('There was an error!', error);
            }
        });
  }

}
