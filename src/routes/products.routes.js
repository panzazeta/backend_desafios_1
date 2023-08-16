import {Router} from "express";
import ProductManager from "../classes/ProductManager.js";

const productManager = new ProductManager("./data.txt")
const prodsRouter = Router();

prodsRouter.get("/", async(req,res) => {
    const {limit} = req.query;
    const products= await productManager.getProducts();
    if(limit){
       const limitProducts= products.slice(0, limit);
       res.status(200).send(limitProducts);
    } else {
    res.send(products);
    }
});

prodsRouter.get("/:pid", async(req,res) => {
    const products= await productManager.getProducts();
    const productsPid = products.find(prod => prod.id === parseInt(req.params.pid));
    if(productsPid)
        res.send(productsPid)
    else
        res.send("Error: product not found")
})

export default prodsRouter;