const express = require("express");
const app = express();

const saludar=require("./saludar.js");

app.get("/", function(request, response){
    let saludo=saludar();
    response.send(saludo);
});



app.listen(3000);