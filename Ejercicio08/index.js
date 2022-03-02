const express = require("express");
const aleatorio=require("./aleatorio.js");
const arrayNumeros=require("./array_numeros.js");

const app = express();


app.get("/", function(request, response){
    let numero=aleatorio();
    arrayNumeros[numero]+=1;
    response.send(arrayNumeros);
});

app.get("/borrar/:numero", function(request, response){
    let numero=parseInt(request.params.numero);
    for(let i=0; i<arrayNumeros.length; i++){
        if(arrayNumeros[i]===numero){
            arrayNumeros[i]=0;
        }
    }
    response.send(`El número introducido se ha puesto a 0: ${arrayNumeros}`);

});

app.listen(3000);

