const express = require("express");
const app = express();

let persona={
    nombre: "Elena",
    apellidos: "Bestilleiro García",
    edad: 37,
}

app.get("/nombre/:parametro", function(request, response){
    persona.nombre=request.params.parametro;
    response.send(persona);
});

app.get("/apellidos/:parametro", function(request, response){
    persona.apellidos=request.params.parametro;
    response.send(persona);
});

app.get("/edad/:parametro", function(request, response){
    persona.edad=parseInt(request.params.parametro);
    response.send(persona);
});

app.listen(3000);