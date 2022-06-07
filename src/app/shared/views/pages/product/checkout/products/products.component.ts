import { Component, OnInit, ViewChild } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import { BillingService } from "src/app/shared/services/billing.service";
import { ProductService } from "src/app/shared/services/product.service";
import { ThemeService } from "src/app/shared/services/theme.service";
import { Router } from '@angular/router';
import { Billing } from "src/app/shared/models/billing";
import { BillingFactory } from "src/app/shared/models/factories/billing-factory";
import { ToastrService } from "src/app/shared/services/toastr.service";
import { ShippingService } from "src/app/shared/services/shipping.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  checkoutProducts: Product[];
  currentCcy: string;

  totalPrice: number = 0;
  subTotal: number = 0;
  shippingFee: number = 0;

  constructor(productService: ProductService,
    themeService: ThemeService,
    private billingService: BillingService,
    private shippingService: ShippingService,
    private router: Router,
    private toastrService: ToastrService) {

    const products  = productService.getLocalCartProducts();
    this.currentCcy = themeService.getCurrentCcy();

    this.checkoutProducts = products;

    products.forEach((product) => {
      this.totalPrice += product.productPrice;
    });

    //PW: only request shipping fee if totalPrice is valid.
    if (this.totalPrice > 0) {
      shippingService.getShippingFee(this.totalPrice, this.currentCcy).subscribe(fee => {
          this.shippingFee = fee;
          this.totalPrice += fee;
      });
    }
  }

  ngOnInit() {}


 //PW: some billing info are hard-coded, change later.
  /** *
   * Patrick: [todo in future].
   */
  placeOder() {
    let newBilling: Billing = new Billing(
      this.subTotal, /*subTotal*/
      this.shippingFee, /*shippingFee*/
      this.totalPrice, /*total*/
      "Patrick", /*firstName*/
      "Wei", /*lastName*/
      "patrickw@myemail.com", /*emailId*/
      "100 Queen St", /*address1*/
      "NA", /*address2*/
      "New Zealand", /*country*/
      "Auckland", /*state*/
      "1001", /*zip*/
      this.checkoutProducts
    );

    let result = this.billingService.placeOrder(newBilling);

    result.subscribe(errorCode => {
        if (errorCode == 0) { //PW: succeed
            this.router.navigate([
              "checkouts",
              { outlets: { checkOutlet: ["result"] } },
            ]);

            //PW: clear local shopping cart
            localStorage.removeItem("avct_item");

            this.toastrService.success(
              "Place Order",
              "Order is placed successfully"
            );
        }
        else { //PW: failed, handle error messages

          this.toastrService.error(
            "Place Order",
            "Order not placed successfully"
          );
        }
    });
  }

}
