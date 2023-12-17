const path = require("path");
const {
  getAllItems,
  getOneItem,
  getAllItemsRel,
} = require("../services/itemsServices");

/*Creo y exporto controladores*/
module.exports = {
  admin: async (req, res) => {
    const data = await getAllItems();

    res.render(path.resolve(__dirname, "../views/admin/admin"), {
      title: "Funkoshop Admin",
      view: "admin",
      data,
    });
  },
  createItemView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/create"), {
      title: "Funkoshop crear productos",
      view: "admin",
    });
  },

  createItem: (req, res) => res.send("Ruta que a creado un nuevo Item"),
    /*const item = req.body;
    await itemsServices.create(item);*/
    /*res.redirect("/admin");*/
   
  



  editItemView: async (req, res) => {
    const { id } = req.params;
    const [product] = await getOneItem(id);
    

    res.render(path.resolve(__dirname, "../views/admin/edit"), {
      title: "Funkoshop Editar tienda",
      view: "admin",
      product,
      
    });
  },
  editItem: (req, res) => res.send("Ruta para modificar un  Item específico"),
  deleteItem: (req, res) => res.send("Ruta para eliminar un Item específico"),
};
