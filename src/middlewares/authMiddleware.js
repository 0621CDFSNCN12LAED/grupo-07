//Checkea si el usuario está logueado

function authMiddleware(req, res, next) {
  if (req.session.usuarioLogueado != undefined) {
    next();
  } else {
    res.render("userProfile");
  }
}

module.exports = authMiddleware;
