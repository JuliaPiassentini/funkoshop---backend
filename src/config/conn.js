const mysql = require('mysql2');
require('dotenv').config();

/*Crea el pool de conexiones y los objetos de configuración basicos que necesita el pool para funcionar*/
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    port:3306,//puerto del server base de datos
    waitForConnections:"true",
    connectionsLimit:10,
    queueLimit:0


});
/*TEST de conexión a la DB y posterior liberación de la conexión si quiero cerrarla connection.end */
pool.getConnection((error,connection)=>{
    if(error){
        console.log('Hubo un error de conexión:', error);//Si hubo un error con al conexión lo lee y me lo pasa por consola,no olvidar abrir nueva terminal con node...ruta hacia el archivo ./src/config/conn.js
    }else{
        console.log('Conexión a la base de datos exitosa!');
        connection.release();

    }
});
//Exportamos la conexión como una promesa para poder hacer peticiones asíncronas
module.exports ={
    conn: pool.promise()
};





