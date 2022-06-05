// Core Dependencies
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// configuration and services
import { ProductRoutes } from "./product.routing";

// Components
import { CheckoutModule } from "./checkout/checkout.module";

import { ProductComponent } from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CartProductsComponent } from "./cart-products/cart-products.component";
import { CartCalculatorComponent } from "./cart-calculator/cart-calculator.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    SharedModule,
    CheckoutModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartProductsComponent,
    CartCalculatorComponent,
  ],
  exports: [],
})
export class ProductModule {}
