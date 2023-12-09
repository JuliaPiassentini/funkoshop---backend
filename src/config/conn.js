const mysql = require('mysql2');

/*Crea el pool de conexiones y los objetos de configuración basicos que necesita el pool para funcionar*/
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"admin1988",
    database:"funkos_db",
    port:3306,
    waitForConnections:"true",
    connectionsLimit:10,
    queueLimit:0


});
/*TEST de conexión a la DB y posterior liberación de la conexión si quiero cerrarla connection.end */
pool.getConnection((error,connection)=>{
    if(error){
        console.log('Hubo un error de conexión:', error);
    }else{
        console.log('Conexión a la base de datos exitosa!');
        connection.release();

    }
});
//Exportamos la conexión como una promesa
module.exports ={
    conn: pool.promise()
};





