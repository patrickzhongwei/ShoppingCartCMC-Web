import { ProductDto } from "../dto/product-dto";
import { Product } from "../product";

export class ProductFactory {

  // PW: create Product instance from ProductDto
/**
 * @param {ProductDto} dto - a ProductDto instance
 * @returns {Product} return Product instance
 */
  create(dto: ProductDto): Product {

    return new Product(
      dto.p, /*productkey*/
      dto.r, /*productId*/
      dto.o, /*productName*/
      dto.d, /*productCategory*/
      dto.u, /*productPrice*/
      dto.c, /*productDescription*/
      dto.t, /*productImageUrl*/
      dto.a, /*productAdded*/
      dto.q, /*productQuatity*/
      dto.i, /*ratings*/
      dto.f, /*favourite*/
      dto.s, /*productSeller*/
      dto.e  /*currency*/
    );
  }


   // PW: create ProductDto instance from Product
/**
 * @param {Product} product - a Product instance
 * @returns {ProductDto} return a ProductDto instance
 */
createDto(product: Product): ProductDto {
  return new ProductDto(
    product.productkey,
    product.productId,
    product.productName,
    product.productCategory,
    product.productPrice,
    product.productDescription,
    product.productImageUrl,
    product.productAdded,
    product.productQuatity,
    product.ratings,
    product.favourite,
    product.productSeller,
    product.currency
  );

}



  // PW: create Product[] instance from ProductDto[]
/**
 * @param {ProductDto[]} product - a ProductDto array instance
 * @returns {Product[]} return a Product[] instance
 */
 createBatch(dtos: ProductDto[]): Product[]
 {
     let products: Product[] = [];

     dtos.forEach(e => {
         if(e)
             products.push(this.create(e));
     });

     return products;
 }

}
