import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "src/app/shared/services/toastr.service";
import { Product } from "src/app/shared/models/product";
import { ProductService } from "src/app/shared/services/product.service";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {
    this.product = new Product();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const id = params.id; // (+) converts string 'id' to a number
      this.getProductDetail(id);
    });
  }

  getProductDetail(id: string) {
    const x = this.productService.getProductById(id);
    x.subscribe(
      (product) => {
        //PW: [todo now]

        //const y = { ...(product.payload.toJSON() as Product), $key: id };
        //this.product = y;
      },
      (error) => {
        this.toastrService.error("Error while fetching Product Detail", error);
      }
    );
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
