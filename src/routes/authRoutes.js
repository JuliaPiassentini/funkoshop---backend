const express = require("express");

/*Solicito de express un método para la creación de rutas en diferentes archivos*/
const router = express.Router();
const controller = require("../controllers/authControllers");

router.get("/login", controller.loginView);
router.post("/login", controller.validarLogin);
router.get("/register", controller.registerView);
router.post("/register", controller.createRegister);
router.get("/logout", controller.logout);

module.exports = router;
