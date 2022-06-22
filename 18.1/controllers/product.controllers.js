import { Product } from "../models/product.model.js";

export const createNewProduct = async (req, res, next) => {
  try {
    console.log("here");
    const productToSave = req.body;
    console.log(productToSave);
    const newProduct = new Product(productToSave);
    const saveProduct = await newProduct.save();
    res.status(200).send({ data: saveProduct });
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e.message);
  }
};
export const getAllProducts = async (req, res, next) => {
  try {
    const user = await Product.find({});
    res.status(200).send({ data: user });
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e.message);
  }
};
export const getSpecificProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Product.findById(id);
    if (!user) {
      throw new Error("Invalid id");
    }
    res.status(200).send({ data: user });
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e.message);
  }
};
export const getActiveProduct = async (req, res, next) => {
  try {
    const user = await Product.find({ isActive: true });
    console.log(user);
    if (!user) {
      throw new Error("error");
    }
    res.status(200).send({ data: user });
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e.message);
  }
};
export const getProductByRange = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    console.log(from);
    console.log(to);
    const user = await Product.find({ price: { $gte: from, $lte: to } });
    if (!user) {
      throw new Error("error");
    }
    res.status(200).send({ data: user });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const body = req.body;
    const { id: userID } = req.params;
    const user = await Product.findByIdAndUpdate({ _id: userID }, body, {
      new: true,
    });
    res.status(200).send({ data: user });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    const { id: userID } = req.params;
    const deletedUser = await Product.findOneAndDelete({ _id: userID });
    res.status(200).send({ data: deletedUser });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
export const deleteAll = async (req, res, next) => {
  try {
    const deletedUser = await Product.deleteMany({});
    res.status(200).send({ data: deletedUser });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
