// import fetch from "node-fetch";
const axios = require("axios").default;
const req = async () => {
  try {
    const { data } = await axios.get("https://api.kanye.rest");
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
// req();
const req2 = () => {
  const request = require("request");
  request("https://api.kanye.rest", function (error, response, body) {
    console.error("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);
  });
};
// req2();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const req3 = async () => {
  const response = await fetch("https://api.kanye.rest");
  const body = await response.text();
  console.log("here");
  console.log(body);
};
// req3();
