import express from "express";
import ProductManager from "./classes/ProductManager.js";

const productManager = new ProductManager("./data.txt")

const PORT = 8080;
const app = express();

app.listen(PORT, () => {
    console.log("Server is running...")
});

app.get("/products", async(req,res) => {
    const products= await productManager.getProducts();
    res.send(products);
});

