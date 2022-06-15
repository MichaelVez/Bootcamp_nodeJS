const express = require("express");
// const numbers = require("./numbers.json");
// const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3005;
const axios = require("axios").default;
const cors = require("cors");
app.use(cors());
const getWeather = async () => {
  const { data } = await axios.get(
    "https://goweather.herokuapp.com/weather/tel-aviv"
  );
  console.log(data);
  return data;
};
app.get("/", async (req, res) => {
  console.log("get request");
  const dataFetch = await getWeather();
  console.log(dataFetch);
  res.json(dataFetch);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
