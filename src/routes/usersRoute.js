const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/user-images"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploader = multer({
  storage,
});

const userController = require("../controllers/userControllers");

//validaciones
const checkValidation = require("../middlewares/checkValidation");
const userFormValidation = require("../validations/userFormValidation");

//form de registro
router.get("/register", userController.register);
//procesar el registro
router.post(
  "/register",
  uploader.single("userImage"),
  userFormValidation,
  userController.processRegister
);

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