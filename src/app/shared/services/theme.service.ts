import { Injectable } from "@angular/core";
import { retry } from "rxjs/operators";
import { Product } from "../models/product";
import { BillingService } from "./billing.service";
import { ProductService } from "./product.service";
import { ToastrService } from "./toastr.service";

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
  readonly BaseCcyCode: string        = "AUD"; //PW: note "AUD" is base currency in the system

  //PW: country and currency view, like 'Australia (AUD)'.
  readonly Australia_AUD_View: string   = `${this.Australia} (${this.AustraliaCcyCode})`;
  readonly NewZealand_NZD_View: string  = `${this.NewZealand} (${this.NewZealandCcyCode})`;;
  readonly US_USD_View: string          = `${this.US} (${this.UsCcyCode})`;

  //PW: current values
  currentCountry: string = this.Australia
  currentCcy: string = this.AustraliaCcyCode;

  constructor(
    private billingService: BillingService,
    private toastrService: ToastrService) {
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
 * @param {string} ccyCode - A country's currency code.
 */
  updateCountryAndCcy(country : string, ccyCode: string) {

    if(country != this.currentCountry) {
        //PW: clear cart, ask for re-add.
        this.toastrService.info("Remind", "Your cart will be emptied everytime when changing country.");
    }

    //PW: update local variables
    this.currentCountry = country;
    this.currentCcy = ccyCode;

    //PW: persist into local storage
    localStorage.setItem(this.LocalStorageKey_Country, country);
    localStorage.setItem(this.LocalStorageKey_CcyCode, ccyCode);
    localStorage.removeItem("avct_item");
  }


  /** *******************************************************************
 * Patrick: buggy code, need debuging.
 * **********************************************************************
 */
  // updateCartByNewCcy(newCcyCode: string, newCountry : string) {

  //   if (newCcyCode != this.currentCcy) {

  //       this.billingService.getIndirectRate(this.BaseCcyCode + newCcyCode).subscribe(r => {

  //         const products = JSON.parse(localStorage.getItem("avct_item")!);

  //         if (r != 0) {
  //             //PW: retrieve from local storage, and manipulate by loop.


  //             products.forEach((each) => {
  //               each.currency = newCcyCode;
  //               each.price = Math.round(each.price / r);

  //             });

  //             //PW: update local storage
  //             localStorage.setItem("avct_item", JSON.stringify(products));
  //             localStorage.setItem(this.LocalStorageKey_Country, newCountry);
  //             localStorage.setItem(this.LocalStorageKey_CcyCode, newCcyCode);

  //             //PW: update local variables
  //             this.currentCountry = newCountry;
  //             this.currentCcy = newCcyCode;
  //         }
  //         else {
  //             //this.toastrService.error("System Error", "Retrieving exchange rate failed!");
  //         }

  //       });
  //   }
  // }



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
