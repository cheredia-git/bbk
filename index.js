//importamos el paquete express a nuestro documento JS
​
const express = require("express");
​
//Igualamos la variable app a lo que devuelve la función express()
const app = express();
​
//Ahora que app tiene lo que devuelve express, es un objeto con diferentes métodos.
//Uno de ellos es get(). Que recibirá por parámetros, primero un string con la url
//y segundo una función que recibe otros 2 parametros. req (request, solicitud) y res(response, respuesta)
app.get("/:numero", function (req, res) {
  //req es un objeto que dentro tiene un objeto llamado params. En params tenemos los
  //parametros que nos llegan por la url. El nombre del parametro será igual que el nombre de la clave
  //en el objeto params
  //Como nuestro parametro es /:numero, creamos una variable numero  que la igualamos a su valor, que está en req.params.numero
  let numero = req.params.numero;
  //Creamos un número aleatorio con el número que llega por parametros como valor máximo y lo guardamos en una variable
  let aleatorio = Math.floor(Math.random() * parseInt(numero - 0) + 0);
  //res es un objeto que tiene el metodo send() dentro. El método send  envía lo que le pasemos por parámetros
  //cuando nos llega una solicitud
​
  res.send(`Aleatorio: ${aleatorio}`);
});
​
//app tiene otro metodo dentro. El método listen() que por parámetros recibe el número de puerto que queremos
//que el servidor escuche.
app.listen(3000);