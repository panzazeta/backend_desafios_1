import express from "express";
import multer from "multer";
import prodsRouter from "./routes/products.routes.js";
import cartsRouter from "./routes/cart.routes.js"
import { __dirname } from "./path.js";
import path from "path";

const app = express();
const PORT = 8080;

//Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/img')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`)
    }
});

//Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const upload = multer({storage: storage});

//Routes:
app.use("/api/products", prodsRouter);
app.use("/api/carts", cartsRouter);
app.use("/static", express.static(path.join(__dirname, "/public")));

// console.log(__dirname + "/public");
// console.log(path.join(__dirname, "/public"));

app.post("/upload", upload.single("product"), (req,res) => {
    console.log(req.file)
    console.log(req.body)
    res.status(200).send("Image loaded")
 }) 

app.listen(PORT, () => {
    console.log(`Server on port:${PORT}`)
});

