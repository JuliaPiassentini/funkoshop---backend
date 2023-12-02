module.exports = {
  loginView: (req, res) => res.send("Ruta para la vista de Login"),
  validarLogin: (req, res) => res.send("Ruta para validar los datos de login"),
  registerView: (req, res) => res.send("Ruta para la vista de Registro"),
  createRegister: (req, res) => res.send("Ruta para crear un nuevo usuario"),
  logout: (req, res) => res.send("Ruta para cerrar la sesión"),
};
