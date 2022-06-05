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

      this.Australia_AUD  = this.themeService.Australia_AUD_View;
      this.NewZealand_NZD = this.themeService.NewZealand_NZD_View;
      this.US_USD         = this.themeService.US_USD_View;

      this.selectedCountryAndCcy = this.themeService.getCurrentCountryAndCcyView();

      console.log(translate.data);
  }

  ngOnInit() {}

  onClickCountryItem(event: any) {
    //PW: set current country and ccy
    this.selectedCountryAndCcy = event.currentTarget.innerText;

    //PW: parse country and ccy txt like 'Australia (AUD)'
    let countryCcyArray: string[] = this.selectedCountryAndCcy.replace(')', '').split('(');

    //PW: persiste state at local storage
    this.themeService.updateCountryAndCcy(countryCcyArray[0].trim(), countryCcyArray[1].trim());

    //PW: navigate to any path, then go to current url in order to refresh current component.
    let currentUrl: string = this.router.url;
    this.router.navigateByUrl(`/`, { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });

  }
}
