const express = require("express");

const numbers = require("./numbers.json");
const getNumbers = () => {
  return numbers;
};

const app = express();
const PORT = process.env.PORT || 3000;
//main
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("main");
});
//get
app.get("/numbers", (req, res) => {
  // const numJson = JSON.parse();
  console.log(`method ${req.method}`);
  res.send(getNumbers());
});
//params
app.delete("/numbers/:id", (req, res) => {
  console.log(`method ${req.method}`);
  res.send(`deleting ${req.params.id}`);
});
//post
app.post("/post", (req, res) => {
  console.log(`method ${req.method}`);
  res.send(`method ${req.method}`);
});
app.delete("/delete", (req, res) => {
  console.log(`method ${req.method}`);
  res.send(`method ${req.method}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
