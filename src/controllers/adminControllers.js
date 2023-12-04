const path = require ('path');


/*Creo y exporto controladores*/
module.exports = {
  admin: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/admin/admin'),{
      title: 'Funkoshop Admin',
      view :'admin',
    })
},
  createItemView: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/admin/create'),{
      title: 'Funkoshop crear productos',
      view :'admin',
    })
},
  createItem: (req, res) => res.send("Ruta para agregar un nuevo Item"),
  editItemView: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/admin/edit'),{
      title: 'Funkoshop Editar tienda',
      view :'admin',
    })
},
  editItem: (req, res) => res.send("Ruta para modificar un  Item específico"),
  deleteItem: (req, res) => res.send("Ruta para eliminar un Item específico"),
};
