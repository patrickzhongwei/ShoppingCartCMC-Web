import { Billing } from "./../models/billing";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BillingService {

  constructor() {
    this.getBillings();
  }

  createBillings(data: Billing) {
    //Patrick: todo
  }

  getBillings() {
    //Patrick: todo
  }

  getBillingById(key: string) {
    //Patrick: todo
  }

  updateBilling(data: Billing) {
    //Patrick: todo
  }

  deleteBilling(key: string) {
    //Patrick: todo
  }
}
