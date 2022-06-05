import { Billing } from "../billing";
import { BillingDto } from "../dto/billing-dto";

export class BillingFactory {

  create(dto: BillingDto): Billing {

    return new Billing(
      dto.s, /*subTotal*/
      dto.h, /*shippingFee*/
      dto.t, /*total*/
      dto.f, /*firstName*/
      dto.l, /*lastName*/
      dto.m, /*emailId*/
      dto.a, /*address1*/
      dto.d, /*address2*/
      dto.c, /*country*/
      dto.e, /*state*/
      dto.z /*zip*/
    );
  }
}
