import express from "express";
import prodsRouter from "./routes/products.routes.js";
import cartsRouter from "./routes/cart.routes.js"

const app = express();
const PORT = 8080;

//Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Routes:
app.use("/api/products", prodsRouter);
app.use("/api/carts", cartsRouter);

app.listen(PORT, () => {
    console.log(`Server on port:${PORT}`)
});

