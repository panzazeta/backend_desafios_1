import { promises as fs } from "fs";

export default class ProductManager {
    constructor(){
        this.products = [];
        this.path = "./data.txt"
    }

    async addProduct(product) {
        if (!product.title || !product.description || !product.price 
            || !product.thumbnail || !product.code || !product.stock) {
            console.log("Please fill out all the required fields");
            return;
        }
      const prod =  this.products.find(prod => prod.code === product.code)
        if (prod) {
            console.log("The product is already in use")
        } else {
            this.products.push(product);
           await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
        }
    }

    async getProducts() {
        try {
            const productsStored = await fs.readFile(this.path, "utf-8");
            this.products = JSON.parse(productsStored);
            console.log(this.products);
        } catch (error) {
            console.error("Cannot acces to the products stored:", error);
        }
    }

    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id);
            if(prod) {
                console.log(prod)
            } else {
                console.log("Product not found")
                }
            }

    deleteProduct(id) {

 }

}
