const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>res.send('Ruta para la vista de Shop'));
router.get('/item/:id',(req,res)=>res.send('Ruta para la vista del Item seleccionado'));
router.post('/item/:id/add',(req,res)=>res.send('Ruta para la creación de un nuevo item'));
router.get('/cart',(req,res)=>res.send('Ruta para la vista del Carrito'));
router.post('/cart',(req,res)=>res.send('Ruta para agregar un item al carrito'));

module.exports = router;