const express= require('express');/*Requerimos una instancia express con su codigo que facilita creacion de servers */
const app= express();/*Instacia express ejecutada que monta un server */
/*Importamos archivos de rutas*/
const mainRoutes =require('./src/routes/mainRoutes.js');
const shopRoutes =require('./src/routes/shopRoutes.js');
const adminRoutes =require('./src/routes/adminRoutes.js');
const authRoutes =require('./src/routes/authRoutes.js');


/*==CONFIGURAMOS EL SERVER== */
/*Configuramos una ruta que devuelve cierta respuesta */
const PORT = 4000;

app.use(express.static('public'));


app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);




app.listen(PORT,()=>console.log(`Servidor corriendo en http://localhost:${PORT}`));/*Configuramos un puerto al que el server escuche y al momento de iniciarse le definimos que envíe un mje por consola,para probar si funciona ejecutar comando en terminal node app.js */