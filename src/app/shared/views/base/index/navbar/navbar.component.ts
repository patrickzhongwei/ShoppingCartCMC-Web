import { AfterViewInit, Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/shared/services/product.service";
import { ThemeService } from "src/app/shared/services/theme.service";
import { TranslateService } from "src/app/shared/services/translate.service";
declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {

  readonly Australia_AUD: string;
  readonly NewZealand_NZD: string;
  readonly US_USD: string;

  selectedCountryAndCcy: string;

  constructor(
    private router: Router,
    public productService: ProductService,
    public translate: TranslateService,
    private themeService: ThemeService
  ) {

      this.Australia_AUD = this.themeService.Australia_AUD;
      this.NewZealand_NZD = this.themeService.NewZealand_NZD;
      this.US_USD = this.themeService.US_USD;

      this.selectedCountryAndCcy = this.themeService.Australia_AUD;

      console.log(translate.data);
  }

  ngOnInit() {}

  onClickCountryItem(event: any) {
    //PW: set current country and ccy
    this.selectedCountryAndCcy = event.currentTarget.innerText;

    //PW: parse country and ccy txt like 'Australia (AUD)'
    let countryCcyArray: string[] = this.selectedCountryAndCcy.replace(')', '').split('(');

    //PW: persiste state at local storage
    this.themeService.updateCurrencyAndCcy(countryCcyArray[0].trim(), countryCcyArray[1].trim());

  }
}
