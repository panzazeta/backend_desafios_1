import express from "express";
import ProductManager from "./classes/ProductManager.js";

const productManager = new ProductManager("./data.txt")

const PORT = 8080;
const app = express();

app.get("/products", async(req,res) => {
    const products= await productManager.getProducts();
    res.json({products});
});

app.listen(PORT, () => {
    console.log("server ok")
});