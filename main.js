import ProductManager from "./classes/ProductManager.js";
import Product from "./classes/Product.js";

const productManager = new ProductManager();
const product1 = new Product("producto prueba","Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
const product2 = new Product("producto prueba","Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );

console.log(productManager.getProducts());

productManager.addProduct(product1)

console.log(productManager.getProducts());

productManager.addProduct(product2);

console.log(productManager.getProducts());
