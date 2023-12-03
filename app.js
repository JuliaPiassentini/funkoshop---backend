const express = require('express');/*Requerimos una instancia express con su codigo que facilita creacion de servers */
const app = express();/*Instacia express ejecutada que monta un server */
const path = require ('path');


/*Importamos archivos de rutas*/
const mainRoutes =require('./src/routes/mainRoutes.js');
const shopRoutes =require('./src/routes/shopRoutes.js');
const adminRoutes =require('./src/routes/adminRoutes.js');
const authRoutes =require('./src/routes/authRoutes.js');


/*==CONFIGURAMOS EL SERVER== */

/*En caso de que no exista una variable de entorno llamada PORT le asigna el valor 4000 */
const PORT = process.env.PORT || 4000;
/*Configuramos el motor de plantillas*/
app.set('view engine', 'ejs');
/*Configuramos la ruta de vistas,indicamos al server donde ir a buscar las vistas*/
app.set('views', path.join(__dirname, './src/views'));  

/*Middleware para determinar carpeta de archivos estáticos*/
app.use(express.static('public'));

/*Middlewares para que ante cada petición mi servidor revise estos archivos de rutas que tienen asociados controladores con ciertas respuestas*/
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);




app.listen(PORT,()=>console.log(`Servidor corriendo en http://localhost:${PORT}`));/*Configuramos un puerto al que el server escuche y al momento de iniciarse le definimos que envíe un mje por consola,para probar si funciona ejecutar comando en terminal node app.js */