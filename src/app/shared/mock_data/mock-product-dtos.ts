import { ProductDto } from "../models/dto/product-dto";

export const mockProductDtos: any = [
  {
    p /*productkey*/ : "L1HnndxVc2-KaJ10Skc",
    r /*productId*/ : 10001,
    o /*productName*/: "Apple iPhone X 64,GB",
    d /*productCategory*/ : "Smartphone",
    u /*productPrice*/ : 8000,
    c /*productDescription*/ : `The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi`,
    t /*productImageUrl*/ : "https://i.ibb.co/ZVGQZsb/iphone-x-in-hand.jpg",
    a /*productAdded*/ : 1654414949,
    q /*productQuatity*/ : 99,
    i /*ratings*/ : 5,
    f /*favourite*/ : 1,
    s /*productSeller*/ : "Apple",
    e /*currency*/ : "AUD"
  },

  {
    p /*productkey*/ : "LG0nDkGo2w9ey5JLhaf-KaJ10Skc",
    r /*productId*/ : 10002,
    o /*productName*/: "RealMe 1 (Silver)",
    d /*productCategory*/ : "Smartphone",
    u /*productPrice*/ : 4000,
    c /*productDescription*/ : `13MP primary camera with beautify, filter, HDR, panorama, ultra HD and 8MP front facing camera 15.2 centimeters (6-inch) 1080p FHD capacitive touchscreen with 2160 x 1080 pixels resolution and 403 ppi pixel density Android v8.1 Oreo operating system with 2GHz MTK Helio P60 AI octa core processor with 8-cores CPU, 4GB RAM, 64GB internal memory expandable up to 256GB and dual SIM (nano+nano) dual-standby (4G+4G) 3410mAH lithium-ion battery providing talk-time of 30 hours and standby time of 380 hours 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
    t /*productImageUrl*/ : "https://i.ibb.co/5jnXDv7/realme1.jpg",
    a /*productAdded*/ : 1654414950,
    q /*productQuatity*/ : 99,
    i /*ratings*/ : 4,
    f /*favourite*/ : 0,
    s /*productSeller*/ : "Realme",
    e /*currency*/ : "AUD"
  },

  {
    p /*productkey*/ : "LG0ndKVM8VGYxVUH7qC",
    r /*productId*/ : 10003,
    o /*productName*/: "Moto G6 (Indigo Black)",
    d /*productCategory*/ : "Smartphone",
    u /*productPrice*/ : 4500,
    c /*productDescription*/ : `12+5MP dual rear cameras (f/1.8, single LED flash) with creative camera system; 16MP front facing camera with low light mode and LED flash Unlock your phone by simply letting the camera see your face. It knows who you are thanks to the face recognition software, so you don’t need to enter your password 14.5cm (5.7) FHD+ 18:9 Max Vision display with 1080*2160 pixels resolution; Premium 3D glass black 4GB RAM and 64GB internal memory expandable up to 256GB; Android v8.0 Oreo operating system with Snapdragon 450 1.8GHz Octa-core processor 3000mAh battery with 15W TurboPowerTM charging 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including battery from the date of purchase`,
    t /*productImageUrl*/ : "https://i.ibb.co/d5QB740/moto-g6-2.jpg",
    a /*productAdded*/ : 1654414951,
    q /*productQuatity*/ : 89,
    i /*ratings*/ : 3,
    f /*favourite*/ : 0,
    s /*productSeller*/ : "Motorolla",
    e /*currency*/ : "AUD"
  },

  {
    p /*productkey*/ : "LIj11ZwXMhvnB6K8fae",
    r /*productId*/ : 10004,
    o /*productName*/: "Realme 1 (Diamond)",
    d /*productCategory*/ : "Smartphone",
    u /*productPrice*/ : 4000,
    c /*productDescription*/ : `13MP primary Camera with beautify, filter`,
    t /*productImageUrl*/ : "https://i.ibb.co/5jnXDv7/realme2.jpg",
    a /*productAdded*/ : 1654414952,
    q /*productQuatity*/ : 89,
    i /*ratings*/ : 4,
    f /*favourite*/ : 0,
    s /*productSeller*/ : "Oppo",
    e /*currency*/ : "AUD"
  },

  {
    p /*productkey*/ : "LXsQ2ImqAdLlHJFAwor",
    r /*productId*/ : 10005,
    o /*productName*/: "Nokia 8.1",
    d /*productCategory*/ : "Smartphone",
    u /*productPrice*/ : 3000,
    c /*productDescription*/ : `4 GB RAM | 64 GB ROM | 15.7 cm (6.18 inch) Full HD+ Display 12MP + 13MP | 20MP Front Camera 3500 mAh Battery Qualcomm Snapdragon 710 Processor`,
    t /*productImageUrl*/ : "https://i.ibb.co/g9Vk9jc/nokia8-1.jpg",
    a /*productAdded*/ : 1654414953,
    q /*productQuatity*/ : 69,
    i /*ratings*/ : 2,
    f /*favourite*/ : 0,
    s /*productSeller*/ : "Nokia",
    e /*currency*/ : "AUD"
  },
];


export const mockProductDtos2 : ProductDto[] = [

    new ProductDto(
    "L1HnndxVc2-KaJ10Skc", //p /*productkey*/ :
    10001, //r /*productId*/ :
    "Apple iPhone X 64,GB", //o /*productName*/:
    "Smartphone", //d /*productCategory*/ :
    8000, //u /*productPrice*/ :
    `The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi`, //c /*productDescription*/ :
    "https://i.ibb.co/ZVGQZsb/iphone-x-in-hand.jpg", //t /*productImageUrl*/ :
    1654414949, //a /*productAdded*/ :
    99, //q /*productQuatity*/ :
    5, //i /*ratings*/ :
    true, //f /*favourite*/ :
    "Apple", //s /*productSeller*/ :
    "AUD" //e: string; /*currency*/
  ),

  new ProductDto(
    "LG0nDkGo2w9ey5JLhaf-KaJ10Skc", //p /*productkey*/ :
    10002, //r /*productId*/ :
    "RealMe 1 (Silver)", //o /*productName*/:
    "Smartphone", //d /*productCategory*/ :
    4000, //u /*productPrice*/ :
    `13MP primary camera with beautify, filter, HDR, panorama, ultra HD and 8MP front facing camera 15.2 centimeters (6-inch) 1080p FHD capacitive touchscreen with 2160 x 1080 pixels resolution and 403 ppi pixel density Android v8.1 Oreo operating system with 2GHz MTK Helio P60 AI octa core processor with 8-cores CPU, 4GB RAM, 64GB internal memory expandable up to 256GB and dual SIM (nano+nano) dual-standby (4G+4G) 3410mAH lithium-ion battery providing talk-time of 30 hours and standby time of 380 hours 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`, //c /*productDescription*/ :
    "https://i.ibb.co/5jnXDv7/realme1.jpg", //t /*productImageUrl*/ :
    1654414950, //a /*productAdded*/ :
    99, //q /*productQuatity*/ :
    4, //i /*ratings*/ :
    false, //f /*favourite*/ :
    "Realme", //s /*productSeller*/ :
    "AUD" //e: string; /*currency*/
  ),

  new ProductDto(
    "LG0ndKVM8VGYxVUH7qC", //p /*productkey*/ :
    10003, //r /*productId*/ :
    "Moto G6 (Indigo Black)", //o /*productName*/:
    "Smartphone", //d /*productCategory*/ :
    4500, //u /*productPrice*/ :
    `12+5MP dual rear cameras (f/1.8, single LED flash) with creative camera system; 16MP front facing camera with low light mode and LED flash Unlock your phone by simply letting the camera see your face. It knows who you are thanks to the face recognition software, so you don’t need to enter your password 14.5cm (5.7) FHD+ 18:9 Max Vision display with 1080*2160 pixels resolution; Premium 3D glass black 4GB RAM and 64GB internal memory expandable up to 256GB; Android v8.0 Oreo operating system with Snapdragon 450 1.8GHz Octa-core processor 3000mAh battery with 15W TurboPowerTM charging 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including battery from the date of purchase`, //c /*productDescription*/ :
    "https://i.ibb.co/d5QB740/moto-g6-2.jpg", //t /*productImageUrl*/ :
    1654414951, //a /*productAdded*/ :
    89, //q /*productQuatity*/ :
    3, //i /*ratings*/ :
    false, //f /*favourite*/ :
    "Motorolla", //s /*productSeller*/ :
    "AUD" //e: string; /*currency*/
  ),

  new ProductDto(
    "LIj11ZwXMhvnB6K8fae", //p /*productkey*/ :
    10004, //r /*productId*/ :
    "Realme 1 (Diamond)", //o /*productName*/:
    "Smartphone", //d /*productCategory*/ :
    4000, //u /*productPrice*/ :
    `13MP primary Camera with beautify, filter`, //c /*productDescription*/ :
    "https://i.ibb.co/5jnXDv7/realme2.jpg", //t /*productImageUrl*/ :
    1654414952, //a /*productAdded*/ :
    89, //q /*productQuatity*/ :
    4, //i /*ratings*/ :
    false, //f /*favourite*/ :
    "Oppo", //s /*productSeller*/ :
    "AUD" //e: string; /*currency*/
  ),

  new ProductDto(
    "LXsQ2ImqAdLlHJFAwor", //p /*productkey*/ :
    10005, //r /*productId*/ :
    "Nokia 8.1", //o /*productName*/:
    "Smartphone", //d /*productCategory*/ :
    45, //u /*productPrice*/ :
    `4 GB RAM | 64 GB ROM | 15.7 cm (6.18 inch) Full HD+ Display 12MP + 13MP | 20MP Front Camera 3500 mAh Battery Qualcomm Snapdragon 710 Processor`, //c /*productDescription*/ :
    "https://i.ibb.co/g9Vk9jc/nokia8-1.jpg", //t /*productImageUrl*/ :
    1654414953, //a /*productAdded*/ :
    69, //q /*productQuatity*/ :
    2, //i /*ratings*/ :
    false, //f /*favourite*/ :
    "Nokia", //s /*productSeller*/ :
    "AUD" //e: string; /*currency*/
  ),

 ];
