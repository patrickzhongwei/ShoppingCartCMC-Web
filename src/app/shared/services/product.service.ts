import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../models/product";
import { AuthService } from "./auth.service";
import { ToastrService } from "./toastr.service";

@Injectable()
export class ProductService {
  products: Product[] = [];
  product: Product | undefined;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  getProducts() {
    //PW: [todo now]
    return of(this.products);
  }


  getProductById(key: string): Observable<Product> {
    //PW: [todo now]
    return of(this.product!);
  }

  /*
   ----------  Cart Product Function  ----------
  */

  // Adding new Product to cart db if logged in else localStorage
  addToCart(data: Product): void {
    const a: Product[] = JSON.parse(localStorage.getItem("avct_item")!) || [];
    a.push(data);

    this.toastrService.wait(
      "Adding Product to Cart",
      "Product Adding to the cart"
    );
    setTimeout(() => {
      localStorage.setItem("avct_item", JSON.stringify(a));
    }, 500);
  }

  // Removing cart from local
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

  // Fetching Locat CartsProducts
  getLocalCartProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("avct_item")!) || [];

    return products;
  }
}
