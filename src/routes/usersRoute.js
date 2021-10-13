const express = require("express");
const router = express.Router();

//const multer = require("multer");
const path = require("path");

const { body } = require("express-validator");

// Middlewares
let guestMiddleware = require("../middlewares/guestMiddleware");
let authMiddleware = require("../middlewares/authMiddleware");
const uploader = require("../middlewares/multerMiddleware");

// Controller
const userController = require("../controllers/userControllers");

//validaciones
const checkValidation = require("../middlewares/checkValidation");
const userFormValidation = require("../validations/userFormValidation");

//Registro - Form de registro
router.get("/register", guestMiddleware, userController.register);

//Procesar el registro
router.post(
  "/register",
  uploader.single("avatar"),
  userFormValidation,
  userController.processRegister
);

//Login - Form de login
router.get("/login", guestMiddleware, userController.login);
router.post(
  "/userProfile",
  [
    body("email")
      .isEmail()
      .withMessage("No tenemos este email registrado en nuestra base"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Contraseña incorrecta, inténtalo nuevamente"),
  ],
  userController.processLogin
);

router.get("/check", function (req, res) {
  if (req.session.usuarioLogueado == undefined) {
    res.send("No estás logueado");
  } else {
    res.send("Bienvenido " + req.session.usuarioLogueado.email);
  }
});

//Perfil del usuario
//router.get("/profile/:Id", userController.profile);
router.get("/userProfile", userController.userProfile);

module.exports = router;
