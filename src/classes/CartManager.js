import { promises as fs } from "fs";

class Cart {
    constructor(id) {
        this.id = id;
        this.products = [];
    }

    addProduct(productId) {
        const productIndex = this.products.findIndex(p => p.product === productId);
        if(productIndex === -1) {
            this.products.push({product: productId, quantity: 1});
        } else {
            this.products[productIndex].quantity += 1;
        }
    }
}

export default class CartManager {
    constructor(filePath) {
        this.path = filePath;
        this.nextId = 1;
        this.carts = []
    }

    saveToFile = async() => {
        try {
            await fs.writeFile(this.path, JSON.stringify(this.carts, null, 2));
        } catch (error) {
            console.error("Error at saving cart:", error);
        }
    }

    createCart = async() => {
        await this.getAllCarts();
        const newCart = new Cart(this.nextId);
        this.carts.push(newCart);
        this.saveToFile();
        return newCart;
    }

    getAllCarts = async() => {
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            if (data.length > 0) {
                this.carts = JSON.parse(data);
                const maxIdCart = this.carts.reduce((prev, curr) => (prev.id > curr.id) ? prev : curr);
                this.nextId = maxIdCart.id + 1;
            }
            return this.carts;
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.log("Carts file doesn´t exists. A new one will be created");
                return [];
            } else {
                console.error("Error reading carts file:", error);
            }
        }
    }
  
    getCartById = async(id) => {
        await this.getAllCarts();
        const cart = this.carts.find(cart => cart.id === id);
        if (cart) {
            return cart;
        } else {
            console.log('Cart not found');
        }
    }

    addProductToCart = async(cartId, productId) => {
        const cartData = await this.getCartById(cartId);
        if(!cartData) {
            throw new Error('Cart not found');
        } else {
        const { id, products } = cartData; 
        const cart = new Cart(id); 
        cart.products = [...products];
        cart.addProduct(productId);
        await this.saveToFile();
        }
    }
}
