import { Product } from "./product";

export class Billing {
  subTotal:     number; //PW: only sum of product price
  shippingFee:  number; //PW: shipping fee
  total:        number; //PW: sum of product price + shipping fee
  firstName:    string; //PW: customer's first name
  lastName:     string; //PW: customer's last name
  emailId:      string; //PW: customer's email id
  address1:     string; //PW: customer's address1
  address2:     string; //PW: customer's address2
  country:      string; //PW: customer's country
  state:        string; //PW: customer's state if any
  zip:          string; //PW: customer's post code
  products:     Product[]; //PW: all products purchased by customer. Multiple same Products are added here separately, as Product 'quantity' isn't used, it will change later.

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
    zip:          string,
    products:     Product[]
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
    this.products = products;

  }
}
