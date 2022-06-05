export class Product {
  productkey:         string;
  productId:          number;
  productName:        string;
  productCategory:    string;
  productPrice:       number;
  productDescription: string;
  productImageUrl:    string;
  productAdded:       number; //PW: the number of seconds since the Unix Epoch
  productQuatity:     number;
  ratings:            number;
  favourite:          boolean;
  productSeller:      string;

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
    productSeller:      string
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
  }
}
