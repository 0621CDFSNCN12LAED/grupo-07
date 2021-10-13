const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Debe insertar un nombre para registrarse"),
  body("birthdate")
    .notEmpty()
    .withMessage("Para nosotrxs es importante saber tu fecha de cumple :)"),
  body("email")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Este no es un email válido"),
  body("password")
    .notEmpty()
    .withMessage("Debes ingresar una contraseña")
    .bail()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe contener como mínimo 6 caracteres"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Debes confirmar tu contraseña")
    .bail()
    .custom(async (confirmPassword, { req }) => {
      const password = req.body.password;
      // If password and confirm password not same
      // don't allow to sign up and throw error
      if (password !== confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
      }
    }),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".jpeg"];

    if (!file) {
      throw new Error("Nos gustaría conocerte. Sube una foto porfa");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          "Lo siento, solo aceptamos archivos con extensión .jpg,. jpeg, .png"
        );
      }
    }

    return true;
  }),
];
