export default class ProductManager {
    constructor(){
        this.products = [];
    }

    addProduct(product) {
      const prod =  this.products.find(prod => prod.code === product.code)
        if (prod) {
            console.log("The product is already in use")
        } else {
            this.products.push(product);
        }
    }

 getProducts() {
    console.log(this.products);
    }
 
 getProductById(id) {
    const prod = this.products.find(prod => prod.id === id);
        if(prod) {
            console.log(prod)
        } else {
            console.log("Product not found")
             }
        }
}
