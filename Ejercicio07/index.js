const express = require("express");
const aleatorio=require("./aleatorio.js");
const arrayNumeros=require("./array_numeros.js");

const app = express();


app.get("/", function(request, response){
    let numero=aleatorio();
    arrayNumeros[numero]+=1;
    response.send(arrayNumeros);
});


app.listen(3000);

