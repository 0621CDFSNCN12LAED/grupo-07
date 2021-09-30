//Require

const express = require("express");
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
//Express
const app = express();

//Middlewares
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(session({ secret: "Sh! Esto es un secreto" }));
app.use(cookieParser());
//uso de metodo para capturar info de forms
app.use(express.urlencoded({ extended: false }));

//Template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routing //

const rutasMain = require("./routes/mainRoute");
const rutasProducts = require("./routes/productsRoute");
const rutasUsers = require("./routes/usersRoute");

app.use("/", rutasMain);
app.use("/products", rutasProducts);
app.use("/user", rutasUsers);

//Error
// app.use((req, res, next) => next(createError(404))); <= ARREGLAR

// Servidor //
app.listen(3000, () => {
  console.log("servidor en puerto 3000");
});
