import ProductManager from "./class/ProductManager.js";
import Product from "./class/Product.js";

const productManager = new ProductManager();
const product1 = new Product("producto prueba","Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
const product2 = new Product("producto prueba","Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );

console.log(productManager.getProducts());

productManager.addProducts(product1)

console.log(productManager.getProducts());

productManager.addProducts(product2);

console.log(productManager.getProducts());
