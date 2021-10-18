//Require
const express = require("express");
const router = express.Router();

//Middlewares
const uploader = require("../middlewares/productMulterMiddleware");
const assertAdmin = require("../middlewares/assertAdmin");

//Controllers
const productsControllers = require("../controllers/productsControllers");

/*** GET ALL PRODUCTS ***/
router.get("/", productsControllers.products);

/*** CREATE ONE PRODUCT ***/
router.get("/create", assertAdmin, productsControllers.productCreate);
router.post(
  "/",
  assertAdmin,
  uploader.single("image"),
  productsControllers.store
);

/*** GET ONE PRODUCT ***/
router.get("/:id", productsControllers.productDetail);

/*** BUY PRODUCT ***/
router.get("/productCart", productsControllers.productCart);

/*** EDIT ONE PRODUCT***/
router.get(
  "/:id/edit",
  assertAdmin,
  assertAdmin,
  uploader.single("image"),
  productsControllers.edit
);
router.put(
  "/:id",
  assertAdmin,
  uploader.single("image"),
  productsControllers.update
);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", assertAdmin, productsControllers.destroy);

module.exports = router;
