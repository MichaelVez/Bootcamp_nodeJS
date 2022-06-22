import express from "express";
const productRouter = express.Router();
import {
  getAllProducts,
  createNewProduct,
  getSpecificProduct,
  getActiveProduct,
  getProductByRange,
  updateProduct,
  deleteProduct,
  deleteAll,
} from "../controllers/product.controllers.js";

productRouter.post("/newProduct", createNewProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/getSpecificProduct/:id", getSpecificProduct);
productRouter.get("/getActiveProducts", getActiveProduct);
productRouter.get("/getProductByRange", getProductByRange);
productRouter.put("/updateProduct/:id", updateProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);
productRouter.delete("/deleteAll", deleteAll);
export { productRouter };
