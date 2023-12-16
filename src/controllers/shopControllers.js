const path = require("path");
const fs = require("fs");
const { getAllItems, getOneItem } = require("../services/itemsServices");
/*Exportamos un objeto,con los controladores de cada ruta*/
module.exports = {
  shop: async (req, res) => {
    let items = await getAllItems();

    if (items.isError) {
      items = "Ups...hubo un error para obtener los datos, sigue navegando ";
    }

    res.render(path.resolve(__dirname, "../views/shop/shop"), {
      title: "Funkoshop Shop",
      view: "home",
      items,
    });
  },
  /* shop: (req, res) => {
        /*const datos = fs.readFileSync(
      path.resolve(__dirname, "../data/items.json")
    );
    const items = JSON.parse(datos);
    /*console.log(items)*/
  /*res.render(path.resolve(__dirname, "../views/shop/shop"), {
      title: "Funkoshop Shop",
      view: "home",
      items,
    });
  },*/
  shopItem: async (req, res) => {
    const id =
      req.params
        .id; /*Si en la ruta determinase item/:item aca sería req.params.item */
    const item = await getOneItem(id);

    res.render(path.resolve(__dirname, "../views/shop/item"), {
      title: "Funkoshop Colecciones",
      view: "home",
      item,
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
