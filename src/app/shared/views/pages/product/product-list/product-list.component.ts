import { Component, OnInit } from "@angular/core";
// import { AuthService } from "../../../../shared/services/auth.service";
import { ToastrService } from "src/app/shared/services/toastr.service";
import { ProductService } from "src/app/shared/services/product.service";
import { Product } from "src/app/shared/models/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})

export class ProductListComponent implements OnInit {
  productList: Product[];
  loading = false;

  page = 1;
  constructor(
    // public authService: AuthService,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    const x = this.productService.getProducts();
    x.subscribe(
      (product) => {
        this.loading = false;
        this.productList = [];
        product.forEach((element) => {

          let found = this.productList.find(e => e.productId == element.productId);

          if (!found)
              this.productList.push(element);
        });
      },
      (err) => {
        this.toastrService.error("Error while fetching Products", err);
      }
    );
  }


  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
}
