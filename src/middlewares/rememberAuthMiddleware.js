function rememberMiddleware(req, res, next){
    next();
    if(req.cookies.remember_user != undefined && 
        req.session.usuarioLogueado == undefined){
      let allUsers = users;
      let usuarioALoguearse;

      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == req.cookies.remember_user){
            usuarioALoguearse = allUsers[i];
            break;
          }
        }
         req.session.usuarioLogueado = usuarioALoguearse;
      }
    }

module.exports = rememberMiddleware;