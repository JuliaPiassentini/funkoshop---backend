/*Exportamos un objeto,con los controladores de cada ruta*/
module.exports ={
    shop:(req,res)=>res.send('Ruta para la vista de Shop'),
    shopItem:(req,res)=>res.send('Ruta para la vista del Item seleccionado'),
    agregarItemCarrito:(req,res)=>res.send('Ruta para agregar el item seleccionado al carrito'),
    vistaCarrito:(req,res)=>res.send('Ruta para la vista del Carrito con sus elementos cargados'),
    datosCarritoEnviar:(req,res)=>res.send('Ruta para cargar todos los datos del carrito a base de datos'),



}