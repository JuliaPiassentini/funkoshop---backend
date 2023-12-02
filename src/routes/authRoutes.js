const express = require('express');

/*Solicito de express un método para la creación de rutas en diferentes archivos*/
const router = express.Router();

router.get('/login',(req,res)=>res.send('Ruta para la vista de Login'));
router.post('/login',(req,res)=>res.send('Ruta para validar los datos de login'));
router.get('/register',(req,res)=>res.send('Ruta para la vista de Registro'));
router.post('/register',(req,res)=>res.send('Ruta para crear un nuevo usuario'));
router.get('/logout',(req,res)=>res.send('Ruta para cerrar la sesión'));


module.exports = router;