/*Exportamos un objeto,con los controladores de cada ruta*/
module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  contact: (req, res) => res.send("Ruta para la vista de Contacto"),
  about: (req, res) => res.send("Ruta para la vista de About"),
  faqs: (req, res) => res.send("Ruta para la vista de Faqs"),
};
