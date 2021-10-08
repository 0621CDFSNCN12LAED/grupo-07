const fs = require("fs");
const path = require("path");
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

                //image: image ? image.filename : "default-image.png",
                delete: false,
            };
            users.push(user);

            const jsonString = JSON.stringify(users, null, 4);
            fs.writeFileSync(usersFilePath, jsonString);
        } else {
            res.render("register", { errors: errors.array(), old: req.body });
        }
        return res.send("hola estas en tu perfil");
    },
    login: (req, res) => {
        return res.render("login");
    },
    profile: (req, res) => {
        return res.render("userProfile");
    },
};

module.exports = controller;
