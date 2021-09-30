const fs = require("fs");
const path = require("path");

const { validationResult }=require("express-validator");

const controller = {
    register: (req, res) => {
        return res.render("register");
    },
    processRegister: (req, res) => {
       const resultValidation = validationResult(req);

       if(resultValidation.errors.length > 0){
           return res.render("register", {
               errors: resultValidation.mapped(),
               oldData: req.body,
           });  
       }
       return res.send("Ok, las validaciones se pasaron y no tienes errores")
    },
    login: (req, res) => {
        return res.render("login");
    },
    profile: (req, res) => {
        return res.render("userProfile");
    },
}

module.exports = controller;