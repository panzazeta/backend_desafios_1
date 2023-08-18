import CartManager from "../classes/CartManager.js";
import { Router } from "express";

const cartsRouter = Router();
const cartManager = new CartManager("./carts.txt");

cartsRouter.post("/", async (req, res) => {
    await cartManager.createCart();
    res.send("New cart created");
})

cartsRouter.get("/", async (req, res) => {
    res.send( await cartManager.getAllCarts());
})

cartsRouter.get("/:pid", async (req, res) => {
    res.send( await cartManager.getCartById(req.params.pid));
})

cartsRouter.post("/:cid/product/:pid", async (req, res) => {
    res.send( await cartManager.addProductToCart(req.params.cid,req.params.pid));
})

export default cartsRouter