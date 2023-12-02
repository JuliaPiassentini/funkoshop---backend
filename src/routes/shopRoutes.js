const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>res.send('Ruta para la vista de Shop'));
router.get('/item/:id',(req,res)=>res.send('Ruta para la vista del Item seleccionado'));
router.post('/item/:id/add',(req,res)=>res.send('Ruta para agregar el item seleccionado al carrito'));
router.get('/cart',(req,res)=>res.send('Ruta para la vista del Carrito con sus elementos cargados'));
router.post('/cart',(req,res)=>res.send('Ruta para cargar todos los datos del carrito a base de datos'));

module.exports = router;