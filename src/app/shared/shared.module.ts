import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoProductsFoundComponent } from "./components/no-products-found/no-products-found.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { OwlModule } from "ngx-owl-carousel";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { NoAccessComponent } from "./components/no-access/no-access.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProductService } from "./services/product.service";
import { AdminGaurd } from "./guards/admin-gaurd";
import { AuthGuard } from "./guards/auth_gaurd";
import { AuthService } from "./services/auth.service";
import { TranslatePipe } from "./pipes/translate.pipe";
import { NgxContentLoadingModule } from "ngx-content-loading";
import { CardLoaderComponent } from "./components/card-loader/card-loader.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule,
    OwlModule,
    NgxPaginationModule,
    NgxContentLoadingModule,
  ],
  declarations: [
    NoProductsFoundComponent,
    NoAccessComponent,
    PageNotFoundComponent,
    TranslatePipe,
    CardLoaderComponent,
  ],
  exports: [
    NoProductsFoundComponent,
    FormsModule,
    FormsModule,
    RouterModule,
    OwlModule,
    NgxPaginationModule,
    NoAccessComponent,
    PageNotFoundComponent,
    TranslatePipe,
    NgxContentLoadingModule,
    CardLoaderComponent,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ScrollingModule,
  ],
  providers: [
     AuthService,
     AuthGuard,
    // AdminGaurd,
    ProductService,
    FormBuilder,
  ],
})
export class SharedModule {}
