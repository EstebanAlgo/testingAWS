//Ejecutamos servidor NODE
var express = require("express");
var app = express();

const port = process.env.PORT || 8443;

app.get("/", function (req, res) {
  res.send("Hello World!");
}); //end app.get

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
}); //end app.listen
