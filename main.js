import ProductManager from "./classes/ProductManager.js";
import Product from "./classes/Product.js";

const product1 = new Product("producto prueba 1","Este es un producto prueba 1", 200, "Sin imagen", "abc123a", 25 );
const product2 = new Product("producto prueba 2","Este es un producto prueba 2", 300, "Sin imagen", "abc123b", 26 );
const product3 = new Product("producto prueba 3","Este es un producto prueba 3", 400, "Sin imagen", "abc123c", 27 );

const productManager = new ProductManager();

// productManager.addProduct(product1);
// productManager.addProduct(product2);
// productManager.addProduct(product3);

productManager.getProducts();
// productManager.getProductById(2);

