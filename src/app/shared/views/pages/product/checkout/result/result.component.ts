import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import html2canvas from "html2canvas";
import { Product } from "src/app/shared/models/product";
import { ProductService } from "src/app/shared/services/product.service";
declare var $: any;
@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"],
})
export class ResultComponent implements OnInit {

  /** *
   * Patrick: [todo in future].
   */
  products: Product[];
  date: number;
  totalPrice = 0;
  tax = 0;

  constructor(private productService: ProductService, private router: Router) {

    this.products = productService.getLocalCartProducts();

    this.products.forEach((product) => {
      this.totalPrice += product.productPrice;
    });

    this.date = Date.now();
  }

  ngOnInit() {}

  downloadReceipt() {
    /** *
     * Patrick: [todo in future].
     */
  }


  finish() {
    //PW: direct to home
    this.router.navigate(["/"]);
  }
}
