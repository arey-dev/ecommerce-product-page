import product1 from "../assets/image-product-1.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import product2 from "../assets/image-product-2.jpg";
import p1thumbnail from "../assets/image-product-1-thumbnail.jpg";
import p3thumbnail from "../assets/image-product-3-thumbnail.jpg";
import p2thumbnail from "../assets/image-product-2-thumbnail.jpg";
import p4thumbnail from "../assets/image-product-4-thumbnail.jpg";

export const product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  price: 125.00,
  images: [
    { id: 0, imageUrl: product1, thumbnail: p1thumbnail },
    { id: 1, imageUrl: product2, thumbnail: p2thumbnail },
    { id: 2, imageUrl: product3, thumbnail: p3thumbnail },
    { id: 3, imageUrl: product4, thumbnail: p4thumbnail },
  ],
};

// export const products = [
//   {
//     id: 1,
//     name: "Fall Limited Edition Sneakers",
//     imageUrl: product1,
//     thumbnail: p1thumbnail,
//     price: 125,
//   },
//   {
//     id: 2,
//     name: "Fall Limited Edition Sneakers",
//     imageUrl: product2,
//     thumbnail: p2thumbnail,
//     price: 125,
//   },
//   {
//     id: 3,
//     name: "Fall Limited Edition Sneakers",
//     imageUrl: product3,
//     thumbnail: p3thumbnail,
//     price: 125,
//   },
//   {
//     id: 4,
//     name: "Fall Limited Edition Sneakers",
//     imageUrl: product4,
//     thumbnail: p4thumbnail,
//     price: 125,
//   },
// ];
