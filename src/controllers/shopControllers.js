const path = require("path");
const fs = require("fs");

/*Exportamos un objeto,con los controladores de cada ruta*/
module.exports = {
  shop: (req, res) => {
    const datos = fs.readFileSync(
      path.resolve(__dirname, "../data/items.json")
    );
    const items = JSON.parse(datos);
    /*console.log(items)*/
    res.render(path.resolve(__dirname, "../views/shop/shop"), {
      title: "Funkoshop Shop",
      view: "home",
      items,
    });
  },
  shopItem: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item"), {
      title: "Funkoshop Colecciones",
      view: "home",
    });
  },
  agregarItemCarrito: (req, res) =>
    res.send("Ruta para agregar el item seleccionado al carrito"),
  vistaCarrito: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/carrito"), {
      title: "FunkoShop Carrito",
      view: "home",
    });
  },
  datosCarritoEnviar: (req, res) =>
    res.send("Ruta para cargar todos los datos del carrito a base de datos"),
};
