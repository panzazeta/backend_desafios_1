import express from "express";
import ProductManager from "./classes/ProductManager.js";

const productManager = new ProductManager("./data.txt")

const PORT = 8080;
const app = express();

app.listen(PORT, () => {
    console.log("server ok")
});

app.get("/products", (req,res) => {
    res.send("holanda")
});