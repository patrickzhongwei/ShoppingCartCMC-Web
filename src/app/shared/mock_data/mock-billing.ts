import { Billing } from "../models/billing";
import { mockProducts } from "./mock-products";

export const mockBilling: Billing = new Billing(
  5000, /*subTotal*/
  20, /*shippingFee*/
  5020, /*total*/
  "Patrick", /*firstName*/
  "Wei", /*lastName*/
  "patrickw@myemail.com", /*emailid*/
  "100 Queen St", /*address1*/
  "NA", /*address2*/
  "New Zealand", /*country*/
  "Auckland", /*state*/
  "1001", /*zip*/
  mockProducts
)
