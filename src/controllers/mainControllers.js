module.exports = {
  index: (req, res) => {
    res.render("index");
  },

  // users
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  contacto: (req, res) => {
    res.render("contacto");
  },

  fitoterapia: (req, res) => {
    res.render("fitoterapia");
  },

  // otras
  infoplantas: (req, res) => {
    res.render("infoplantas");
  },
  filosofia: (req, res) => {
    res.render("filosofia");
  },
};
