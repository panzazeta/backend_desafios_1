import express from "express";
import ProductManager from "./classes/ProductManager.js";

const productManager = new ProductManager("./data.txt")

const PORT = 8080;
const app = express();

app.use(express.json({ jsonSpaces: 2 }));

app.get("/products", async(req,res) => {
    const products= await productManager.getProducts();
    res.send(products);
});

app.listen(PORT, () => {
    console.log("server ok")
});