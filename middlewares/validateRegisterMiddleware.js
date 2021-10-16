const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
	body("birthdate")
    .notEmpty()
    .withMessage("Para nosotrxs es importante saber tu fecha de cumple :)"),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
	.bail()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe contener como mínimo 6 caracteres"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Debes confirmar tu contraseña"),
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
  })
];