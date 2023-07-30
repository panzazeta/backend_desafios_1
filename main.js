import ProductManager from "./classes/ProductManager.js";
import Product from "./classes/Product.js";

const product1 = new Product("producto prueba","Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
const product2 = new Product("producto prueba","Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );

const productManager = new ProductManager();

productManager.addProduct(product1);
productManager.addProduct(product2);

productManager.getProducts();
productManager.getProductById();

