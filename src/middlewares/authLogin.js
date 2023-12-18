/*Creamos nuestro middleware de rutas para las que necesitan permisos de usurio */
const isLogged = (req,res,next) =>{
 if(req.session.isLogged){
    return next();/*Si se cumple la condición el next da a lugar a que se siga con la petición*/
 }
 return res.status(401).send
 ('Ve a logearte para ingresar a esta sección');

};

module.exports = {
    isLogged,
}