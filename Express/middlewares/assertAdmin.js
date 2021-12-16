const userLogged = require("./userLoggedMiddleware");

module.exports = (req, res, next) => {
  let user = req.session.userLogged;
  if (user.admin == 1) {
    next();
  } else {
    res.send(
      "Lo siento, no tienes permiso para acceder a esta parte de nuestra web"
    );
  }
};
