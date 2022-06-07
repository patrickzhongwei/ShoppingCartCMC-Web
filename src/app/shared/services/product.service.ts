import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { domainToASCII } from "url";
import { mockProductDtos2 } from "../mock_data/mock-product-dtos";
import { ProductFactory } from "../models/factories/product-factory";
import { Product } from "../models/product";
import { AuthService } from "./auth.service";
import { ToastrService } from "./toastr.service";

@Injectable()
export class ProductService {
  products: Product[] = [];
  product: Product | undefined;

  private factory: ProductFactory;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
    this.factory = new ProductFactory();
  }


// PW: get all Products from server
/**
 * @returns {} - return an Observable<Product[]> object
 */
  getProducts(): Observable<Product[]> {

    //PW: for test purpose, using local test data.
    mockProductDtos2.forEach(dto =>
      this.products.push(this.factory.create(dto)));

    return of(this.products);
  }


// PW: get a product by Id
/**
 * @param {string}  key - A Product key
 * @returns {} - return Observable<Product> object
 */
  getProductById(key: string): Observable<Product> {

    //PW: for test purpose, using local test data.
    let found = mockProductDtos2.find(e => e.p == key); //PW: e.p is 'productkey'
    if (found) {
        this.product = this.factory.create(found);
    }

    return of(this.product!);
  }


// PW: Adding new Product to cart db if logged in else localStorage
/**
 * @param {Product}  data - A Product object
 * @returns {} void
 */
  addToCart(data: Product): void {
    const a: Product[] = JSON.parse(localStorage.getItem("avct_item")!) || [];

    data.productQuatity = 1; //PW: here quantity is not handled, always set to '1' for timebeing //Patrick: [todo in future]
    a.push(data);

    this.toastrService.wait(
      "Adding Product to Cart",
      "Product Adding to the cart"
    );
    setTimeout(() => {
      localStorage.setItem("avct_item", JSON.stringify(a));
    }, 500);
  }


// PW: Removing cart from local
/**
 * @param {Product}  product - A Product object
 * @returns {} void
 */
  removeLocalCartProduct(product: Product) {
    const products: Product[] = JSON.parse(localStorage.getItem("avct_item")!);

    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === product.productId) {
        products.splice(i, 1);
        break;
      }
    }
    // ReAdding the products after remove
    localStorage.setItem("avct_item", JSON.stringify(products));
  }


// PW: Fetching Locat CartsProducts
/**
 * @returns {Product[]} - return an Product array
 */
  getLocalCartProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("avct_item")!) || [];

    return products;
  }
}
