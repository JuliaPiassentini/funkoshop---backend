/*Creo y exporto controladores*/
module.exports = {
  admin: (req, res) => res.send("Ruta para la vista de Admin"),
  createItemView: (req, res) =>
    res.send("Ruta para la vista de Crear un nuevo Item"),
  createItem: (req, res) => res.send("Ruta para agregar un nuevo Item"),
  editItemView: (req, res) =>
    res.send("Ruta para la vista de Editar un Item específico"),
  editItem: (req, res) => res.send("Ruta para modificar un  Item específico"),
  deleteItem: (req, res) => res.send("Ruta para eliminar un Item específico"),
};
