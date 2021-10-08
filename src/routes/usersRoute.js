const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const userController = require("../controllers/userControllers");

//validaciones
const checkValidation = require("../middlewares/checkValidation");
const userFormValidation = require("../validations/userFormValidation");

//form de registro
router.get("/register", userController.register);
//procesar el registro
router.post("/register", userFormValidation, userController.processRegister);

//form de login
router.get("/login", userController.login);
router.post(
  "/login",
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

//Perfil del usuario
//router.get("/profile/:userId", userController.profile);
router.get("/userProfile", userController.userProfile);

module.exports = router;
