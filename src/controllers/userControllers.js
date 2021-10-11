const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const userService = require("../services/userService");

const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../dataBase/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
  //Register - Form to register
  register: (req, res) => {
    return res.render("register");
  },

  // Create - Method to store a user
  processRegister: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      userService.createOne(req.body, req.file);
      res.redirect("userProfile");
    } else {
      res.render("register", { errors: errors.array(), old: req.body });
    }
  },

  //Login- Form to login
  login: (req, res) => {
    return res.render("login");
  },

  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let allUsers = users;
      let usuarioALoguearse;

      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.password, allUsers[i].password)) {
            usuarioALoguearse = allUsers[i];
            break;
          }
        }
      }
      if (usuarioALoguearse == undefined) {
        return res.render("login", {
          errors: [{ msg: "Lo sentimos, tus credenciales no son válidas!" }],
        });
      }
      req.session.usuarioLogueado = usuarioALoguearse;

      res.render("loginExitoso");
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },

  userProfile: (req, res) => {
    return res.render("userProfile");
  },
};

module.exports = controller;
