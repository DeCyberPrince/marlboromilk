const express = require("express");
const cors = require("cors");
const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.json());
app.use(cors);

const port = process.env.PORT || 3000;

// app.use(express.static(__dirname + "/public/"));
// app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("started at", port);
});
