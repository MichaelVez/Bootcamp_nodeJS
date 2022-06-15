const express = require("express");
// const numbers = require("./numbers.json");
// const bodyParser = require("body-parser");
const app = express();
const axios = require("axios").default;
const route = require("./route/index.route");
const cors = require("cors");
app.use(cors());
app.use("/", route);

// app.get("/:city", async (req, res) => {
//   console.log("get request");
//   const dataFetch = await getWeather(req.params.city);
//   console.log(dataFetch);
//   res.json(dataFetch);
// });

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
