const express = require('express');

const router = express.Router();
const controller = require('../controllers/shopControllers');


router.get('/',controller.shop);
router.get('/item/:id',controller.shopItem);
router.post('/item/:id/add',controller.agregarItemCarrito);
router.get('/cart',controller.vistaCarrito);
router.post('/cart',controller.datosCarritoEnviar);

module.exports = router;