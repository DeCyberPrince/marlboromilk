const express = require("express");
const cors = require("cors");
const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.json());
app.use(cors);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/dist/"));
  app.get(/.*/, (req, res) => {
    return res.sendFile(__dirname + "/dist/index.html");
  });
}
app.listen(port, () => {
  console.log("started at", port);
});
