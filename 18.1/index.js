import mongoose from "mongoose";
import { app } from "./app/app.js";

const PORT = process.env.PORT || 5050;
const URL = "mongodb://127.0.0.1/product";

mongoose.connect(URL, (error, mongoDBInstance) => {
  if (error) {
    throw new error("connection error");
  }
  if (!process.env.NODE_ENV || !process.env.NODE_ENV === "development") {
    const { host, port, name } = mongoDBInstance;
    console.log({ host, port, name });
  }
});

app.listen(PORT, () => {
  console.log("listen on port " + PORT);
});
