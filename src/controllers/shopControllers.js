const path = require ('path');

/*Exportamos un objeto,con los controladores de cada ruta*/
module.exports ={
    shop:(req,res)=>{
        res.render(path.resolve(__dirname, '../views/shop/shop'))
    },
    shopItem:(req,res)=>{
        res.render(path.resolve(__dirname, '../views/shop/item'))
    },
    agregarItemCarrito:(req,res)=>res.send('Ruta para agregar el item seleccionado al carrito'),
    vistaCarrito:(req,res)=>{
        res.render(path.resolve(__dirname, '../views/shop/carrito'))
    },
    datosCarritoEnviar:(req,res)=>res.send('Ruta para cargar todos los datos del carrito a base de datos'),

}