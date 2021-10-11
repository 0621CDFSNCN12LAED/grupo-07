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
      let usersDataBase = fs.readFileSync("usersDataBase.json", {
        encoding: "utf-8",
      });
      let users;
      if (usersDataBase == "") {
        users = [];
      } else {
        users = JSON.parse(usersDataBase);
      }
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.password, users[i].password)) {
            let usuarioALoguearse = users[i];
            break;
          }
        }
      }
      if (usuarioALoguearse == undefined) {
        return res.render("login", { errors: errors.errors });
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
