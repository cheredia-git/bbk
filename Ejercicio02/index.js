const express = require("express");
const app = express();

app.get("/:numero", function(request, response){
    let numero=parseInt(request.params.numero);
    let aleatorio=Math.floor(Math.random() * parseInt(numero - 0) + 0);

    response.send(`Número aleatorio entre 0 y ${numero}: ${aleatorio}`);
});

app.listen(3000);