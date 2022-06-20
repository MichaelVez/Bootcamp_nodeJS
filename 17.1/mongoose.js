const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/product");

const Product = mongoose.model("Products", {
  name: { type: String, required: true },
  category: { type: String, required: true },
  isActive: { type: Boolean },
  details: {
    description: {
      type: String,
      validate(value) {
        if (value.length < 10) {
          throw new Error("Invalid description");
        }
      },
    },
    price: {
      type: Number,
      validate(value) {
        if (value < 0) throw new Error("Invalid price");
      },
    },
    discount: { type: Number, default: 0 },
    images: { type: Array },
    phone: {
      type: Number,
      validate(value) {
        if (value.length !== 10) {
          throw new Error("Invalid number");
        }
      },
    },
    dateAdded: { type: Date, default: Date.now },
  },
});
// console.log(Product);
run();
async function run() {
  //   const item = await new Product({ name: "testing" });
  //   item.save();
  //   console.log(item);
}
