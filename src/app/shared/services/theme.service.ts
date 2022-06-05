import { Injectable } from "@angular/core";
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ThemeService {

  //PW: Access keys for local db.
  readonly LocalStorageKey_Country : string = "country";
  readonly LocalStorageKey_CcyCode : string = "ccyCode";


  //PW: countries
  readonly Australia: string  = "Australia";
  readonly NewZealand: string = "New Zealand";
  readonly US: string         = "U.S.";

  //PW: country's currency code
  readonly AustraliaCcyCode: string   = "AUD";
  readonly NewZealandCcyCode: string  = "NZD";
  readonly UsCcyCode: string          = "USD";

  //PW: country and currency view, like 'Australia (AUD)'.
  readonly Australia_AUD_View: string   = `${this.Australia} (${this.AustraliaCcyCode})`;
  readonly NewZealand_NZD_View: string  = `${this.NewZealand} (${this.NewZealandCcyCode})`;;
  readonly US_USD_View: string          = `${this.US} (${this.UsCcyCode})`;

  //PW: current values
  currentCountry: string = this.Australia
  currentCcy: string = this.AustraliaCcyCode;

  constructor() {
  }



// PW: Get current country and currency display, like 'Australia (AUD)'.
/**
 * @returns {string} This is the result
 */
  getCurrentCountryAndCcyView() : string {
    let foundCcyCode = localStorage.getItem(this.LocalStorageKey_CcyCode);
    let foundCountry = localStorage.getItem(this.LocalStorageKey_Country);

    //PW: if country and ccy are not found, use Australia setting as default.
    if (foundCcyCode && foundCountry) {
        return `${foundCountry} (${foundCcyCode})`;
    }
    else {
      localStorage.setItem(this.LocalStorageKey_Country, this.Australia);
      localStorage.setItem(this.LocalStorageKey_CcyCode, this.AustraliaCcyCode);
      return this.Australia_AUD_View;
    }
  }


  // PW: Update currentCountry and currentCcy, and them persist them into localStorage. */
/**
 * @param {string} country - A country name.
 * @param {string=} ccyCode - A country's currency code.
 */
  updateCountryAndCcy(country : string, ccyCode: string) {
    //PW: update local variables
    this.currentCountry = country;
    this.currentCcy = ccyCode;

    //PW: persist into local storage
    localStorage.setItem(this.LocalStorageKey_Country, country);
    localStorage.setItem(this.LocalStorageKey_CcyCode, ccyCode);
  }



// PW: PW: Get current currency code.
/**
 * @returns {string} - return currency currency code.
 */
  getCurrentCcy() : string {
    let found = localStorage.getItem(this.LocalStorageKey_CcyCode);

    //PW: if ccy code is not found, use Australia setting as default.
    if (found) {
        return found;
    }
    else {
      localStorage.setItem(this.LocalStorageKey_Country, this.Australia);
      localStorage.setItem(this.LocalStorageKey_CcyCode, this.AustraliaCcyCode);
      return this.AustraliaCcyCode;
    }
  }

}
