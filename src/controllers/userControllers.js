const fs = require("fs");
const path = require("path");

const userService = require("../services/userService");
const bcrypt = require("bcryptjs");

const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../dataBase/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
    register: (req, res) => {
        return res.render("register");
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const lastUser = users[users.length - 1];
            const biggestUserId = users.length > 0 ? lastUser.id : 1;
            const user = {
                id: biggestUserId + 1,
                name: req.body.name,
                email: req.body.email,
                birthdate: req.body.birthdate,
                password: bcrypt.hashSync(req.body.password, 10),
                userImage: req.file ? req.file.filename : "default-image.png",
                delete: false,
            };
            users.push(user);

            const jsonString = JSON.stringify(users, null, 4);
            fs.writeFileSync(usersFilePath, jsonString);
        } else {
            res.render("register", { errors: errors.array(), old: req.body });
        }
        return res.redirect("userProfile");
    },
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
                    if (
                        bcrypt.compareSync(req.body.password, users[i].password)
                    ) {
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