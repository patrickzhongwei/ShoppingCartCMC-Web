import { ProductDto } from "../dto/product-dto";
import { Product } from "../product";

export class ProductFactory {

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
      dto.s /*productSeller*/
    );
  }
}
