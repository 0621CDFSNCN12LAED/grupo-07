const { body } = require("express-validator");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Debe insertar un nombre para registrarse"),
  body("email").isEmail().withMessage("Debe insertar un mail válido"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Debe insertar una contraseña para el registro"),
];
