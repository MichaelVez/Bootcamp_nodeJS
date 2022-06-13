const http = require("https");
const req2 = () => {
  http
    .get("https://api.kanye.rest", (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        console.log(data);
      });
    })
    .on("error", (err) => {
      console.log(err);
    });
};
req2();
