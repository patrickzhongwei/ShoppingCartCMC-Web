/** *
 * Patrick: [NOTES].
 * 1- minified objects to reduce data size.
 * 2- minification rule must be identical to server side DTO.
 */

import { ProductDto } from "./product-dto";

export class BillingDto {
  s:  number; /*subTotal*/
  h:  number; /*shippingFee*/
  t:  number; /*total*/
  f:  string; /*firstName*/
  l:  string; /*lastName*/
  m:  string; /*emailId*/
  a:  string; /*address1*/
  d:  string; /*address2*/
  c:  string; /*country*/
  e:  string; /*state*/
  z:  string; /*zip*/
  p:  ProductDto[]; /*products*/

  constructor(
    subTotal:  number,
    shippingFee:  number,
    total:  number,
    firstName:  string,
    lastName:  string,
    emailId:  string,
    address1:  string,
    address2:  string,
    country:  string,
    state:  string,
    zip:  string,
    productDtos: ProductDto[]
  ) {
    this.s = subTotal;
    this.h = shippingFee;
    this.t = total;
    this.f = firstName;
    this.l = lastName;

    this.m = emailId;
    this.a = address1;
    this.d = address2;
    this.c = country;
    this.e = state;

    this.z = zip;
    this.p = productDtos;
  }
}
