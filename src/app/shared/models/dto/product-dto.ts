/** *
 * Patrick: [NOTES].
 * 1- minified objects to reduce data size.
 * 2- minification rule must be identical to server side DTO.
 */

 export class ProductDto {
  p: string; /*productkey*/
  r: number; /*productId*/
  o: string; /*productName*/
  d: string; /*productCategory*/
  u: number; /*productPrice*/
  c: string; /*productDescription*/
  t: string; /*productImageUrl*/
  a: number; /*productAdded*/
  q: number; /*productQuatity*/
  i: number; /*ratings*/
  f: boolean; /*favourite*/
  s: string; /*productSeller*/
  e: string; /*currency*/

  constructor(
    productkey: string,
    productId: number,
    productName: string,
    productCategory: string,
    productPrice: number,
    productDescription: string,
    productImageUrl: string,
    productAdded: number,
    productQuatity: number,
    ratings: number,
    favourite: boolean,
    productSeller: string,
    currency: string
  ) {

    this.p = productkey;
    this.r = productId;
    this.o = productName;
    this.d = productCategory;
    this.u = productPrice;

    this.c = productDescription;
    this.t = productImageUrl;
    this.a = productAdded;
    this.q = productQuatity;
    this.i = ratings;

    this.f = favourite;
    this.s = productSeller;
    this.e = currency;
  }
}
