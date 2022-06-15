const express = require("express");
const route = express.Router();
const axios = require("axios").default;

route.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;
    console.log(city);
    const { data } = await axios.get(
      `https://goweather.herokuapp.com/weather/${city}`
    );
    console.log(data);
    res.json(data);
    return data;
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
  // }catch(err){
  //     res.status(400).send(e);
  // }
});

module.exports = route;
