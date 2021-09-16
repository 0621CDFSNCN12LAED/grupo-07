//Require

const express = require("express");
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override");

//Express
const app = express();

//Middlewares
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
app.use(logger("dev"));
app.use(methodOverride("_method"));

//Template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routing //

const rutasMain = require("./routes/mainRoute");
const rutasProducts = require("./routes/productsRoute");

app.use("/", rutasMain);
app.use("/products", rutasProducts);

//Error
// app.use((req, res, next) => next(createError(404))); <= ARREGLAR

// Servidor //
app.listen(3000, () => {
    console.log("servidor en puerto 3000");
});
