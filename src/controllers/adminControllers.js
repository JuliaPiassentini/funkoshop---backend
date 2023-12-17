const path = require("path");
const {
  getAllItems,
  getOneItem,
  } = require("../services/itemsServices");
const {createOneItem,deleteOneItem } = require('../models/itemsModel');

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

  createItem: async (req, res) => {
    /*console.log(req.body);
    console.log(req.files);*/
    const product_schema = {
      product_name : req.body.name,
      product_description : req.body.description,      
      price: Number(req.body.price ),
      stock:Number( req.body.stock),
      discount: Number(req.body.discount),
      sku: req.body.sku,
      dues:Number( req.body.dues),     
      image_front:'/img/products/'+ req.files[0].filename,
      image_back: '/img/products/'+req.files[1].filename,
      licence_id: Number( req.body.licence),
      category_id: Number( req.body.category),      
    }
    /*Utilizamos el squema anterior para crear un array que pasaremos como [params] en la consulta*/
    await createOneItem([Object.values(product_schema)]);
    res.redirect('/admin');
    /*const result = await createOneItem([Object.values(product_schema)]);
    console.log("array:", ([Object.values(product_schema)]));
    console.log(result);
    res.send("Ruta que a creado un nuevo Item"+ result);
    /*const item = req.body;
    await itemsServices.create(item);*/
    /*res.redirect("/admin");*/
  },
  



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


  deleteItem: async (req, res) => {
    const { id } = req.params;
    await deleteOneItem({product_id : id});

    res.redirect('/admin');
  },
};
