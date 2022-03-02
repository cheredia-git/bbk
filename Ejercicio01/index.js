const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("<h1>Hola Mundo</h1>" + "<h2>desde express</h2>");
});

app.listen(3000);
