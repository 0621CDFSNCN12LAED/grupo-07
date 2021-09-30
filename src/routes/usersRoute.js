const express = require("express");
const router = express.Router();
const {body} = require("express-validator")

const userController = require("../controllers/userControllers");

const validations = [
    body("name").notEmpty().withMessage("Debe insertar un nombre para registrarse"),
    body("email").isEmail().withMessage("Debe insertar un mail válido"),
    body("password").notEmpty().withMessage("Debe insertar una contraseña para el registro"),
]


//form de registro
router.get("/register", userController.register);
//procesar el registro
router.post("/register", validations, userController.processRegister);


//form de login
router.get("/login", userController.login);

//Perfil del usuario
router.get("/profile/:userId", userController.profile);

module.exports = router;
