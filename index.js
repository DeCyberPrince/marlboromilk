const express = require("express");
const path = require("path");
const port = process.env.PORT || 80;
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log("Server has been started...");
});
