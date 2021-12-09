const path = require('path');
const { body } = require('express-validator');

module.exports = [
  body("fullName")
    .notEmpty()
    .withMessage("Nos gustaría saber cómo te llamás :)")
    .isLength({ min: 2 })
    .withMessage("Tu nombre tiene que tener por lo menos dos letras"),

  body("birthdate")
    .notEmpty()
    .withMessage("Para nosotrxs es importante saber tu fecha de cumple :)"),

  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),

  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe contener como mínimo 8 caracteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
    .withMessage(
      "Tu contraseña debe combinar letras, números y algun caracter especial"),


  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

    if (!file) {
      throw new Error("Nos gustaría conocerte. Sube una foto porfa");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          "Lo siento, solo aceptamos archivos con extensión .jpg,. jpeg, .png .gif"
        );
      }
    }

    return true;
  }),
];