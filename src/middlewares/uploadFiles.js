const multer = require('multer');
const path = require ('path');

/*Configuramos midleware multer */
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img/products')),
    filename:  (req, file, cb) => cb(null, Date.now() + '_' + file.originalname )
});
/*Iniciamos MULTER */
const upload = multer({storage});/*Utilizamos multer con la configuración establecida y lo adignamos a una variable */
module.exports = upload;
