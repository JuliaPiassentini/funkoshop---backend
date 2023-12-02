const express = require('express');

/*Solicito de express un método para la creación de rutas en diferentes archivos*/
const router = express.Router();

router.get('/home',(req,res)=>res.send('Ruta para la vista de Home'));
router.get('/contact',(req,res)=>res.send('Ruta para la vista de Contacto'));
router.get('/about',(req,res)=>res.send('Ruta para la vista de About'));
router.get('/faqs',(req,res)=>res.send('Ruta para la vista de Faqs'));

module.exports = router;