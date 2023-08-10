import express from "express";
import ProductManager from "./classes/ProductManager.js";

const productManager = new ProductManager("./data.txt")

const PORT = 8080;
const app = express();

app.listen(PORT, () => {
    console.log("Server is running...")
});

app.get("/products", async(req,res) => {
    const {limit} = req.query;
    const products= await productManager.getProducts();
    if(limit){
       const limitProducts= products.slice(0, limit);
       res.send(limitProducts);
    } else {
    res.send(products);
    }
});

app.get("/products/:pid", async(req,res) => {
    const products= await productManager.getProducts();
    const productsPid = products.find(prod => prod.id === parseInt(req.params.pid));
    if(productsPid)
        res.send(productsPid)
    else
        res.send("Product not found")
})