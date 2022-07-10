//Ejecutamos servidor NODE
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
}); //end app.get

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
}); //end app.listen
