import { Billing } from "../billing";
import { BillingDto } from "../dto/billing-dto";
import { ProductDto } from "../dto/product-dto";
import { Product } from "../product";
import { ProductFactory } from "./product-factory";

export class BillingFactory {

   // PW: create Billing instance from BillingDto
/**
 * @param {BillingDto} dto - a BillingDto instance
 * @returns {Billing} return Billing instance
 */
  create(dto: BillingDto): Billing {

    let products: Product[] = [];
    let factgory: ProductFactory = new ProductFactory();

    dto.p.forEach(each => products.push(factgory.create(each)));

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
      dto.z, /*zip*/
      products /*products*/
    );
  }


  // PW: create BillingDto instance from Billing
/**
 * @param {Billing} billing - a Billing instance
 * @returns {BillingDto} return BillingDto instance
 */
  createDto(billing: Billing): BillingDto {

    let productDtos: ProductDto[] = [];
    let factory: ProductFactory = new ProductFactory();

    billing.products.forEach(each => productDtos.push(factory.createDto(each)));

    return new BillingDto(
      billing.subTotal,
      billing.shippingFee,
      billing.total,
      billing.firstName,
      billing.lastName,
      billing.emailId,
      billing.address1,
      billing.address2,
      billing.country,
      billing.state,
      billing.zip,
      productDtos
    )
  }

}
