const express=require("express");
const app=express();
const almacen=require("./almacen.js");

let cesta=[];

app.get("/refrescos", function(request, response){
    let contenidoTabla="";
    for(let i=0; i<almacen[0].productos.length; i++){
        contenidoTabla+=`
            <tr>
                <td>${almacen[0].productos[i].nombre}</td>
                <td>${almacen[0].productos[i].precio}</td>
                <td>${almacen[0].productos[i].stock}</td>
            </tr>
        `;
    }
    let mostrarAlmacen = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                ${contenidoTabla}
            </tbody>
        </table>
    `;
    response.send(mostrarAlmacen);
});



app.get("/cervezas", function(request, response){
    let contenidoTabla="";
    for(let i=0; i<almacen[1].productos.length; i++){
        contenidoTabla+=`
            <tr>
                <td>${almacen[1].productos[i].nombre}</td>
                <td>${almacen[1].productos[i].precio}</td>
                <td>${almacen[1].productos[i].stock}</td>
            </tr>
        `;
    }
    let mostrarAlmacen = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                ${contenidoTabla}
            </tbody>
        </table>
    `;
    response.send(mostrarAlmacen);
});



app.get("/vinos", function(request, response){
    let contenidoTabla="";
    for(let i=0; i<almacen[2].productos.length; i++){
        contenidoTabla+=`
            <tr>
                <td>${almacen[2].productos[i].nombre}</td>
                <td>${almacen[2].productos[i].precio}</td>
                <td>${almacen[2].productos[i].stock}</td>
            </tr>
        `;
    }
    let mostrarAlmacen = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                ${contenidoTabla}
            </tbody>
        </table>
    `;
    response.send(mostrarAlmacen);
});



app.get("/refrescos/:producto/:cantidad", function(request, response){
    let producto=request.params.producto;
    let cantidad=request.params.cantidad;
    let isProductoEnCesta=false;
    for(let i=0; i<almacen[0].productos.length;i++){
        if(producto===almacen[0].productos[i].nombre && cantidad<=almacen[0].productos[i].stock){
            almacen[0].productos[i].stock-=cantidad;
            cesta.push({
                producto: producto,
                cantidad: cantidad,
                stock: almacen[0].productos[i].stock
            });
            isProductoEnCesta=true;
            break;
        }
    }
    isProductoEnCesta ? response.send("Se han añadido " + cantidad + " " + producto) : response.send("No se encuentra ese producto o no tenemos stock");
});



app.get("/cervezas/:producto/:cantidad", function(request, response){
    let producto=request.params.producto;
    let cantidad=request.params.cantidad;
    let isProductoEnCesta=false;
    for(let i=0; i<almacen[1].productos.length;i++){
        if(producto===almacen[1].productos[i].nombre && cantidad<=almacen[1].productos[i].stock){
            almacen[1].productos[i].stock-=cantidad;
            cesta.push({
                producto: producto,
                cantidad: cantidad,
                stock: almacen[1].productos[i].stock
            });
            isProductoEnCesta=true;
            break;
        }
    }
    isProductoEnCesta ? response.send("Se han añadido " + cantidad + " " + producto) : response.send("No se encuentra ese producto o no tenemos stock");
});



app.get("/vinos/:producto/:cantidad", function(request, response){
    let producto=request.params.producto;
    let cantidad=request.params.cantidad;
    let isProductoEnCesta=false;
    for(let i=0; i<almacen[2].productos.length;i++){
        if(producto===almacen[2].productos[i].nombre && cantidad<=almacen[2].productos[i].stock){
            almacen[2].productos[i].stock-=cantidad;
            cesta.push({
                producto: producto,
                cantidad: cantidad,
                stock: almacen[2].productos[i].stock
            });
            isProductoEnCesta=true;
            break;
        }
    }
    isProductoEnCesta ? response.send("Se han añadido " + cantidad + " " + producto) : response.send("No se encuentra ese producto o no tenemos stock");
});



app.get("/cesta", function(request, response){
    let mensaje="";
    if(cesta.length){
        for (let i=0; i<cesta.length; i++){
            mensaje+=`
                <h1>${cesta[i].producto}</h1>
                <p>Cantidad: ${cesta[i].cantidad}</p>
                <p>Stock: ${cesta[i].stock}</p>
            `;
        }
        response.send(mensaje);
    }else{
        response.send("La cesta está vacía");
    }
});


app.get("/comprar", function(request, response){
    if(cesta.length){
        cesta=[];
        response.send("Compra realizada correctamente");
    }else{
        response.send("No hay nada en la cesta");
    }
});


app.listen(3000);