const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controllers");

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/productDetail", mainController.productDetail);
router.get("/productCart", mainController.productCart);
router.get("/productos", mainController.productos);
router.get("/productForm", mainController.productForm);
router.get("/fitoterapia", mainController.fitoterapia);
router.get("/infoplantas", mainController.infoplantas);
router.get("/contacto", mainController.contacto);

module.exports = router;
