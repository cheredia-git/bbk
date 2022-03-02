const express = require("express");
const app = express();

let arrayPersonas=["Elena", "Oskar", "Haizea"];

app.get("/personas", function(request, response){
    let mensaje="";
    for(let i=0; i<arrayPersonas.length; i++){
        mensaje+=`<h1>${arrayPersonas[i]}</h1>`;
    }
    response.send(mensaje);
});

app.get("/personas/:nombre", function(request, response){
    let nombre=request.params.nombre;
    for(let i=0; i<arrayPersonas.length; i++){
        if(nombre===arrayPersonas[i]){
            response.send(`<h1>${arrayPersonas[i]}</h1>`);
        }
    }
    response.send("El nombre introducido no existe");
});

app.listen(3000);