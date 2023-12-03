const path = require ('path');


/*Creo y exporto controladores*/
module.exports = {
  admin: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/admin/admin'))
},
  createItemView: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/admin/create'))
},
  createItem: (req, res) => res.send("Ruta para agregar un nuevo Item"),
  editItemView: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/admin/edit'))
},
  editItem: (req, res) => res.send("Ruta para modificar un  Item específico"),
  deleteItem: (req, res) => res.send("Ruta para eliminar un Item específico"),
};
