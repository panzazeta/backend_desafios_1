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
        res.status(200).send(productsPid)
    else
        res.status(404).send("Error: product not found")
})

prodsRouter.post("/", async (req,res) => {
    const {code} = req.body;
    const confirmation = await productManager.getProductByCode(code)
    if (confirmation) {
        res.status(400).send("Product already created")
    } else {
        const conf = await productManager.addProduct(req.body)
        if(conf) 
            res.status(200).send("Product has been created")
    }
})

prodsRouter.put("/", async (req,res) => {



    
})

export default prodsRouter;