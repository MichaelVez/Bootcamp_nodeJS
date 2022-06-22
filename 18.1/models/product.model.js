import mongoose from "mongoose";
//model is a collection in db - don't read this seriously
//schema represent a collection item- a class that knows to communicate with a collection
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Invalid value");
      }
    },
  },
});
const Product = mongoose.model("products", productSchema);
export { Product };
