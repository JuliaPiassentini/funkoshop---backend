const path = require ('path');
module.exports = {
  loginView: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/auth/login'))
},
  validarLogin: (req, res) => res.send("Ruta para validar los datos de login"),
  registerView: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/auth/register'))
},
  createRegister: (req, res) => res.send("Ruta para crear un nuevo usuario"),
  logout: (req, res) => res.send("Ruta para cerrar la sesión"),
};
