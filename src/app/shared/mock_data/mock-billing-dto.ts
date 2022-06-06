import { BillingDto } from "../models/dto/billing-dto";
import { mockProductDtos2 } from "./mock-product-dtos";

export const mockBillingDto: BillingDto = new BillingDto(
  5000, //s:  number; /*subTotal*/
  20, //h:  number; /*shippingFee*/
  5020, //t:  number; /*total*/
  "Patrick", //f:  string; /*firstName*/
  "Wei", //l:  string; /*lastName*/
  "patrickw@myemail.com", //m:  string; /*emailId*/
  "100 Queen St", //a:  string; /*address1*/
   "NA", //d:  string; /*address2*/
   "New Zealand", //c:  string; /*country*/
  "Auckland", //e:  string; /*state*/
  "1001", //z:  string; /*zip*/
  mockProductDtos2 //p:  ProductDto[]; /*products*/
);



