const express = require("express"); /*Requerimos una instancia express con su codigo que facilita creacion de servers */
const app = express(); /*Instacia express ejecutada que monta un server */
const path = require("path");
const methodOverride = require("method-override");
const dotEnv = require("dotenv");
dotEnv.config();

/*Importamos archivos de rutas*/
const mainRoutes = require("./src/routes/mainRoutes.js");
const shopRoutes = require("./src/routes/shopRoutes.js");
const adminRoutes = require("./src/routes/adminRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");

/*==CONFIGURAMOS EL SERVER== */

/*En caso de que no exista una variable de entorno llamada PORT le asigna el valor 8080 */
const PORT = process.env.PORT || 8080;
/*Configuramos el motor de plantillas*/
app.set("view engine", "ejs");
/*Configuramos la ruta de vistas,indicamos al server donde ir a buscar las vistas*/
app.set("views", path.join(__dirname, "./src/views"));

/*Middleware para determinar carpeta de archivos estáticos*/
app.use(express.static("public"));
/*Middleware para parsear los datos que vienen del front */
app.use(express.urlencoded());/*Parsea los datos recibidos por POST */
app.use(express.json());
app.use(methodOverride("_method"));

/*Middlewares para que ante cada petición mi servidor revise estos archivos de rutas que tienen asociados controladores con ciertas respuestas*/
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

/*Middleware si la petición no coincide con ninguna ruta*/
app.use((req, res) => {
  res.status(404).send("La página que buscas no existe");
});

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
); /*Configuramos un puerto al que el server escuche y al momento de iniciarse le definimos que envíe un mje por consola,para probar si funciona ejecutar comando en terminal node app.js */
