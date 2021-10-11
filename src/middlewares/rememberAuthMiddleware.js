const path = require("path");
const fs = require("fs");

const usersFilePath = path.join(__dirname, "../dataBase/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

function rememberAuthMiddleware(req, res, next){
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

module.exports = rememberAuthMiddleware;