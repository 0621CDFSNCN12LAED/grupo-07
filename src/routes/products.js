const express = require("express");
const router = express.Router;

const mainController = require("../controllers/main-controller");

router.get("/products", mainController.products);

module.exports = router;
