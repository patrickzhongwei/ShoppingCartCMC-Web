import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { TranslateService } from "./shared/services/translate.service";
import { environment } from "../environments/environment";
import { IndexModule } from "./shared/views/base/index/index.module";
import { ProductModule } from "./shared/views/pages/product/product.module";

/* to load and set en.json as the default application language */
export function setupTranslateFactory(service: TranslateService) {
  return () => service.use("en");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IndexModule,
    ProductModule,
    SharedModule,
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
