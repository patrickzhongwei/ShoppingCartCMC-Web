import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { domainToASCII } from "url";
import { mockProductDtos2 } from "../mock_data/mock-product-dtos";
import { ProductDto } from "../models/dto/product-dto";
import { ProductFactory } from "../models/factories/product-factory";
import { Product } from "../models/product";
import { AuthService } from "./auth.service";
import { ThemeService } from "./theme.service";
import { ToastrService } from "./toastr.service";

@Injectable()
export class ProductService {
  products: Product[] = [];
  product: Product | undefined;

  private factory: ProductFactory;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private themeService: ThemeService,
    private http: HttpClient
  ) {
    this.factory = new ProductFactory();
  }


// PW: get all Products from server
/**
 * @returns {} - return an Observable<Product[]> object
 */
  getProducts(): Observable<Product[]> {

    //PW: for unit test purpose, using local test data.
    //**************************************************************************** */
    //mockProductDtos2.forEach(dto => this.products.push(this.factory.create(dto)));
    //return of(this.products);
    /***************************************************************************** */


    let factory = new ProductFactory();
    let newProducts: Product[] = [];

    return this.requestProductDtos().pipe(
      map(dtos => {

        let newProducts = factory.createBatch(dtos);

        if(newProducts.length > 0)
          this.products = newProducts;

        return factory.createBatch(dtos);
      })
    );
  }



// PW: PW: make http get, retrieve ProductDto[] data from server
/**
 * @returns {} - return an Observable<Product[]> object
 */
 private requestProductDtos(): Observable<ProductDto[]> {

  let currentCcy = this.themeService.getCurrentCcy();

  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  let url     = `${environment.shoppingApiUrl}/api/products`;
  let params  = new HttpParams().set("ccyCode", currentCcy);

  return this.http.get<ProductDto[]>(url, { headers: headers, params: params });
}


// PW: get a product by Id
/**
 * @param {string}  key - A Product key
 * @returns {} - return Observable<Product> object
 */
  getProductById(key: string): Observable<Product> {

    //PW: for test purpose, using local test data.
    //**************************************************************************** */
    // let found = mockProductDtos2.find(e => e.p == key); //PW: e.p is 'productkey'
    // if (found) {
    //     this.product = this.factory.create(found);
    // }
    /***************************************************************************** */

    return this.requestProductDtoById(key).pipe(
      map(dto => {

        let factory = new ProductFactory();
        let newProduct = factory.create(dto);
        this.product = newProduct;

        return newProduct;
      })
    );
  }

 // PW: make http get, retrieve a ProductDto data from server
/**
 * @param {string}  key - A product key.
 * @returns {string} A Observable<ProductDto> instance
 */
  private requestProductDtoById(key: string): Observable<ProductDto> {

    let currentCcy = this.themeService.getCurrentCcy();

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let url     = `${environment.shoppingApiUrl}/api/product`;
    let params  = new HttpParams().set("ccyCode", currentCcy).set("key", key);

    return this.http.get<ProductDto>(url, { headers: headers, params: params });
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
