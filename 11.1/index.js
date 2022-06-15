const express = require("express");
const numbers = require("./numbers.json");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(numbers);
  console.log("main");
});
app.delete("/:id", (req, res) => {
  if (numbers.indexOf(parseInt(req.params.id)) === -1) {
    console.log("no such num");
    res.status(400);
    res.send("error");
  } else {
    console.log(`delete param ${req.params.id}`);
    numbers.splice(numbers.indexOf(req.params.id), 1);
  }
  console.log(numbers);
  res.json(numbers);
});
app.post("/", (req, res) => {
  // send(getNumbers().push(req
  if (numbers.indexOf(req.body.new) !== -1) {
    res.status(400);
    res.send("error");
  } else {
    const myBody = req.body.new;
    numbers.push(myBody);
    console.log(typeof myBody);
    res.json(numbers);
  }
});
app.put("/:id", (req, res) => {
  console.log("body: " + req.body.new);
  console.log("pram:" + req.params.id);
  //   console.log(numbers);
  //   numbers.splice(numbers.indexOf(req.params.id), 1, req.body.new);

  const indexOfId = numbers.indexOf(parseInt(req.params.id));
  console.log(indexOfId);
  console.log(numbers);
  if (indexOfId !== -1) {
    numbers[indexOfId] = req.body.new;
    res.json(numbers);
  } else {
    res.status(400);
    res.send("number does not exist");
  }
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
