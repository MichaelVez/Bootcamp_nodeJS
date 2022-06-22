import express from "express";
import { productRouter } from "../routes/product.routes.js";
// import cors from "cors";
// const cors = require("cors");
const app = express();
// app.use(cors);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", productRouter);
export { app };
