const express = require('express');

/*Solicito de express un método para la creación de rutas en diferentes archivos*/
const router = express.Router();

router.get('/',(req,res)=>res.send('Ruta para la vista de Admin'));
router.get('/create',(req,res)=>res.send('Ruta para la vista de Crear un nuevo Item'));
router.post('/create',(req,res)=>res.send('Ruta para agregar un nuevo Item'));
router.get('/edit/:id',(req,res)=>res.send('Ruta para la vista de Editar un Item específico'));
router.put('/edit/:id',(req,res)=>res.send('Ruta para modificar un  Item específico'));
router.delete('/delete/:id',(req,res)=>res.send('Ruta para eliminar un Item específico'));



module.exports = router;