export class Product {
  productkey:         string; //PW: a random string like 'LXsQ2ImqAdLlHJFAwor'
  productId:          number; //PW: product Id, like '10005'
  productName:        string; //PW: product name, like 'Nokia 8.1'
  productCategory:    string; //PW: product category, like 'Smartphone'
  productPrice:       number; //PW: product price amount
  productDescription: string; //PW: production description
  productImageUrl:    string; //PW: product image url link, like 'https://i.ibb.co/g9Vk9jc/nokia8-1.jpg'
  productAdded:       number; //PW: datetime that product is added, this is the number of seconds since the Unix Epoch
  productQuatity:     number; //PW: product stock number
  ratings:            number; //PW: product customer ratings
  favourite:          boolean; //PW: is or isn't favourite product
  productSeller:      string; //PW: product seller
  currency:           string; //PW: currency of product price

  constructor(
    productkey:         string,
    productId:          number,
    productName:        string,
    productCategory:    string,
    productPrice:       number,
    productDescription: string,
    productImageUrl:    string,
    productAdded:       number,
    productQuatity:     number,
    ratings:            number,
    favourite:          boolean,
    productSeller:      string,
    currency:           string
  ) {
    this.productkey       = productkey;
    this.productId        = productId;
    this.productName      = productName;
    this.productCategory  = productCategory;
    this.productPrice     = productPrice;

    this.productDescription   = productDescription;
    this.productImageUrl      = productImageUrl;
    this.productAdded         = productAdded;
    this.productQuatity       = productQuatity;
    this.ratings              = ratings;

    this.favourite      = favourite;
    this.productSeller  = productSeller;
    this.currency       = currency;
  }
}
