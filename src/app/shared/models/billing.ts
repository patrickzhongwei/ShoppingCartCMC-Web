import { timeStamp } from "console";

export class Billing {
  subTotal:     number; //PW: only sum of product price
  shippingFee:  number; //PW: shipping fee
  total:        number; //PW: sum of product price + shipping fee
  firstName:    string;
  lastName:     string;
  emailId:      string;
  address1:     string;
  address2:     string;
  country:      string;
  state:        string;
  zip:          string;

  constructor(
    subTotal:     number,
    shippingFee:  number,
    total:        number,
    firstName:    string,
    lastName:     string,
    emailId:      string,
    address1:     string,
    address2:     string,
    country:      string,
    state:        string,
    zip:          string
  ) {
    this.subTotal     = subTotal;
    this.shippingFee  = shippingFee;
    this.total        = total;
    this.firstName    = firstName;
    this.lastName     = lastName;

    this.emailId  = emailId;
    this.address1 = address1;
    this.address2 = address2;
    this.country  = country;
    this.state    = state;

    this.zip = zip;


  }
}
