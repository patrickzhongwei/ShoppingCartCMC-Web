import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {

  //PW: temporarilly hard code here, change later. They should be from service side static data.
  //PW: countries
  readonly Australia: string = "Australia";
  readonly NewZealand: string = "New Zealand";
  readonly US: string = "U.S.";

  //PW: country currency code
  readonly AustraliaCcyCode: string = "AUD";
  readonly NewZealandCcyCode: string = "NZD";
  readonly UsCcyCode: string = "USD";


  //PW: country + country, for display
  readonly Australia_AUD: string ;
  readonly NewZealand_NZD: string;
  readonly US_USD: string;

  //PW: variables here hold the current states passed from CountryCcy selector UI.
  currentCountry: string = this.Australia
  currentCcy: string = this.AustraliaCcyCode;

  constructor() {
     this.Australia_AUD = `${this.Australia} (${this.AustraliaCcyCode})`;
     this.NewZealand_NZD = `${this.NewZealand} (${this.NewZealandCcyCode})`;
     this.US_USD = `${this.US} (${this.UsCcyCode})`;
  }

  updateCurrencyAndCcy(country : string, ccyCode: string) {
    //PW: update local variables
    this.currentCountry = country;
    this.currentCcy = ccyCode;

    //PW: persist into local storage
    localStorage.setItem("country", JSON.stringify(country));
    localStorage.setItem("ccyCode", JSON.stringify(ccyCode));
  }
}
