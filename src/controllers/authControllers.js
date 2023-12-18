const path = require("path");

const userCredentials = {
  email : 'lareinabatata@gmail.com',
  password : 'sentadaenunplato',
}


module.exports = {
  loginView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login"), {
      title: "Login Funkoshop",
      view: "admin",
    });
  },
  validarLogin: (req, res) => {
    const {email , password} = req.body;
    const emailValidation = userCredentials.email == email;
    const passwordValidation = userCredentials.password == password;

    req.session.isLogged = emailValidation && passwordValidation ? true : false;
    
    if (req.session.isLogged ){
      return res.redirect('/admin');
    }
     return res.status(401).send('Credenciales inválidas intenta logearte nuevamente');
     
    },



  registerView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register"), {
      title: "Registro FunkoShop",
      view: "admin",
    });
  },
  createRegister: (req, res) => res.send("Ruta para crear un nuevo usuario"),
  logout: (req, res) => res.send("Ruta para cerrar la sesión"),
};
