const express = require("express");

/*Solicito de express un método para la creación de rutas en diferentes archivos*/
const router = express.Router();
/*Importo controladores */
const controller = require("../controllers/mainControllers");

router.get("/", controller.home);
router.get("/home", controller.home);
router.get("/contact", controller.contact);
router.get("/about", controller.about);
router.get("/faqs", controller.faqs);

module.exports = router;
