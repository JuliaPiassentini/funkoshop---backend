const express = require('express');
/*Solicito de express un método para la creación de rutas en diferentes archivos*/
const router = express.Router();
const upload = require('../middlewares/uploadFiles');
const {isLogged } = require('../middlewares/authLogin');
const controller = require("../controllers/adminControllers");




router.get("/",isLogged , controller.admin);
router.get("/create", controller.createItemView);
router.post("/create", upload.array('images', 2 ) , controller.createItem);/*metodo array porque trae multiples imagenes y le indicamos el name del input que trae las imagenes y cuantas acepta */
router.get("/edit/:id", controller.editItemView);
router.put("/edit/:id", upload.array('images', 2 ) , controller.editItem);
router.delete("/delete/:id", controller.deleteItem);

module.exports = router;
