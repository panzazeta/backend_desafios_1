export default class ProductManager {
    constructor(){
        this.products = [];
        this.currentProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
           console.log("Please fill out all the required fields");
        }
        const codeValidation = this.products.some(product => product.code === code);
        if (codeValidation) {
            console.log("ID code is already used");
        }
        const newProduct = {
            id: this.currentProductId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.currentProductId++;
        this.products.push(newProduct);
        return newProduct.id;
    }

 getProducts() {
    return this.products;
    }
 
 getProductById(id) {
    const product = this.products.find(prod => prod.code === id);
    if(product){
        return product;
        }else{
        console.log("Product not found");
              }
          }
}
