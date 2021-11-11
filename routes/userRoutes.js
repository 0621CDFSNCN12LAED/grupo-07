const express = require("express");
const router = express.Router();

// Controller
const usersController = require("../controllers/userController");
const cartController = require ("../controllers/cartController");

// Middlewares
const uploadFile = require("../middlewares/userMulterMiddleware");
const validations = require("../validations/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// Formulario de registro
router.get("/register", guestMiddleware, usersController.register);

// Procesar el registro
router.post(
  "/register",
  uploadFile.single("avatar"),
  validations,
  usersController.processRegister
);

// Formulario de login
router.get("/login", guestMiddleware, usersController.login);

// Procesar el login
router.post("/login", usersController.loginProcess);

// Perfil de Usuario
router.get("/userProfile/", authMiddleware, usersController.profile);

// Edit - Perfil de Usuario
router.get("/:id/edit", usersController.edit);
router.put("/:id", uploadFile.single("avatar"), usersController.update);

// Logout
router.get("/logout/", usersController.logout);

/*Carritos
router.get ("/:id/cart", cartController.list)

//Detalle de un carrito
router.get ("/:id/cart/:id", cartController.detail)
*/
module.exports = router;
