import express from "express";
import prodsRouter from "./routes/products.routes.js";
import cartsRouter from "./routes/cart.routes.js"
import { __dirname } from "./path.js";
import path from "path";

const app = express();
const PORT = 8080;

//Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Routes:
app.use("/api/products", prodsRouter);
app.use("/api/carts", cartsRouter);
app.use("/static", express.static(path.join(__dirname, "/public")));

// console.log(__dirname + "/public");
// console.log(path.join(__dirname, "/public"));

app.listen(PORT, () => {
    console.log(`Server on port:${PORT}`)
});

