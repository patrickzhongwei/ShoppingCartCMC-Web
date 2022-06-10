import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from './product.service';
import { ThemeService } from './theme.service';
import { BillingService } from './billing.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslateService } from './translate.service';
import { HttpClient } from '@angular/common/http';
import { shoppingUrl } from 'src/environments/environment';
import { mockProducts } from '../mock_data/mock-products';
import { Product } from '../models/product';


describe('ProductService', () => {

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      providers: [ProductService, AuthService, ThemeService, BillingService, TranslatePipe, TranslateService ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));




  it('should be return alll 5 products', (done) => {

    service.getProducts().subscribe(products => {
        expect(products.length).toBe(5);
        done();
    });

    const request = httpMock.expectOne(`${shoppingUrl.root}/api/products?ccyCode=AUD`);
    expect(request.request.method).toBe("GET");
    request.flush(mockProducts);

  });


  it('should be return 1 product by key', (done) => {

    let key = "L1HnndxVc2-KaJ10Skc";
    service.getProductById(key).subscribe(product => {
        expect(product.productkey).not.toBeNull();
        done();
    });

    let mock: Product = new Product(
      "L1HnndxVc2-KaJ10Skc", //p /*productkey*/ :
      10001, //r /*productId*/ :
      "Apple iPhone X 64,GB", //o /*productName*/:
      "Smartphone", //d /*productCategory*/ :
      8000, //u /*productPrice*/ :
      `The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi`, //c /*productDescription*/ :
      "https://i.ibb.co/ZVGQZsb/iphone-x-in-hand.jpg", //t /*productImageUrl*/ :
      1654414949, //a /*productAdded*/ :
      99, //q /*productQuatity*/ :
      5, //i /*ratings*/ :
      true, //f /*favourite*/ :
      "Apple", //s /*productSeller*/ :
      "AUD" //e: string; /*currency*/
    );

    const request = httpMock.expectOne(`${shoppingUrl.root}/api/product?ccyCode=AUD&key=L1HnndxVc2-KaJ10Skc`);
    expect(request.request.method).toBe("GET");
    request.flush(mock);
  });


});
