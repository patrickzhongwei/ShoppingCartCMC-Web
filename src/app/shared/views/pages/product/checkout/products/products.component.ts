import { Component, OnInit, ViewChild } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import { ProductService } from "src/app/shared/services/product.service";
import { ThemeService } from "src/app/shared/services/theme.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  checkoutProducts: Product[];
  currentCcy: string;

  totalPrice = 0;
  constructor(productService: ProductService, themeService: ThemeService) {

    const products  = productService.getLocalCartProducts();
    this.currentCcy = themeService.getCurrentCcy();

    this.checkoutProducts = products;

    products.forEach((product) => {
      this.totalPrice += product.productPrice;
    });
  }

  ngOnInit() {}
}
