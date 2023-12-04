const path = require ('path');
const fs = require('fs');

/*Exportamos un objeto,con los controladores de cada ruta*/
module.exports ={
    shop:(req,res)=>{
        const datos =  fs.readFileSync(path.resolve(__dirname, '../data/items.json'));
        const items = JSON.parse(datos);
        /*console.log(items)*/
        res.render(path.resolve(__dirname, '../views/shop/shop'),{
            title: 'Funkoshop Shop',
            items
        })
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