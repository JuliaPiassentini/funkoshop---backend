const express = require("express");

/*Solicito de express un método para la creación de rutas en diferentes archivos*/
const router = express.Router();
const controller = require("../controllers/adminControllers");

router.get("/", controller.admin);
router.get("/create", controller.createItemView);
router.post("/create", controller.createItem);
router.get("/edit/:id", controller.editItemView);
router.put("/edit/:id", controller.editItem);
router.delete("/delete/:id", controller.deleteItem);

module.exports = router;
