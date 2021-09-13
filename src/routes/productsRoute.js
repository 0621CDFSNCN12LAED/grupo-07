//Require

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/products"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploader = multer({
  storage,
});

const productsControllers = require("../controllers/productsControllers");

/*** GET ALL PRODUCTS ***/
router.get("/", productsControllers.products);

/*** GET ONE PRODUCT ***/
router.get("/:id", productsControllers.productDetail);

/*** BUY PRODUCT ***/
router.get("/productCart", productsControllers.productCart);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsControllers.productCreate);
router.post("/", uploader.single("image"), productsControllers.store);

/*** EDIT ONE PRODUCT***/
router.get("/:id/edit", productsControllers.edit);
router.put("/:id", productsControllers.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsControllers.destroy);

module.exports = router;
