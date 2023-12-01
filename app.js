const express= require('express');/*Requerimos una instancia express con su codigo que facilita creacion de servers */
const app= express();/*Instacia express ejecutada que monta un server */

app.use(express.static('public'));

/*==CONFIGURAMOS EL SERVER== */
/*Configuramos una ruta que devuelve cierta respuesta */

app.listen(4000,()=>console.log('Servidor corriendo en http://localhost:4000'));/*Configuramos un puerto al que el server escuche y al momento de iniciarse le definimos que envíe un mje por consola,para probar si funciona ejecutar comando en terminal node app.js */