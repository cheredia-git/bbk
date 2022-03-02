const express = require("express");
const app = express();

const arrayPersonas=["Elena", "Oskar", "Haizea", "Pili", "Carmen", "Lorenzo"];

app.get("/:parametro", function(request, response){
    arrayPersonas.push(request.params.parametro);
    
    response.send(arrayPersonas);
});

app.listen(3000);