const userLogged = require("../middlewares/userLoggedMiddleware");

module.exports = (req, res, next) => {
  if (userLogged.admin == 1) {
    next();
  } else {
    res.send(
      "Lo siento, no tienes permiso para acceder a esta parte de neustra web"
    );
  }
};

/*
const User = require("../services/userService");

module.exports = (req, res, next) => {
  if (req.session.userLogged) {
    const admin = User.findByField("admin", true);
    if (admin) {
      next();
    } else {
      res.send("lo siento, no tienes permiso para esto");
    }
  } else {
    res.redirect("/user/login");
  }
};*/
