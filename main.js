import ProductManager from "./class/ProductManager.js";
import Product from "./class/Product.js";

const productAdmin = new ProductManager();
const product1 = new Product("producto prueba","Este es un producto prueba", 200, "Sin imagen", "abc123", 25 )

console.log(productAdmin.getProducts());

productAdmin.addProducts(product1)

console.log(productAdmin.getProducts());
