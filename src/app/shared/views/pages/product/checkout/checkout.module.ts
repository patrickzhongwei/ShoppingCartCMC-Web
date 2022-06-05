import { CheckoutRoutingModule } from "./checkout.routing";

import { ResultComponent } from "./result/result.component";
import { ProductsComponent } from "./products/products.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutComponent } from "./checkout.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  imports: [CommonModule, SharedModule, CheckoutRoutingModule],
  declarations: [
    CheckoutComponent,
    ProductsComponent,
    ResultComponent,
  ],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
