const express = require("express");
const router = express.Router;

const mainController = require("../controllers/main-controllers");

router.get("/", mainController.index);

router.get("/products", mainController.products);

module.exports = router;
