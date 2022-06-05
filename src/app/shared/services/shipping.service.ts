
import { Billing } from "./../models/billing";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ShippingService {

  shippings: Billing[];
  shipping: Billing;

  constructor() {
    this.getshippings();
  }

  createshippings(data: Billing) {
    this.shippings.push(data);
  }

  getshippings() {
    //Patrick: todo now
    return this.shippings;
  }

  getshippingById(key: string) {
    //PW: [todo now]
    return this.shipping;
  }

  updateshipping(data: Billing) {
    //PW: [todo now]
    //this.shippings.update(data.$key, data);
  }

  deleteshipping(key: string) {
    //PW: [todo now]
    //this.shippings.remove(key);
  }
}
