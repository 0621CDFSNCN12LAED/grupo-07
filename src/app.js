//Require
const express = require("express");
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const rememberAuthMiddleware = require("./middlewares/rememberAuthMiddleware");

//Ejecución de Express
const app = express();

//Middlewares a nivel de aplicación
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(session({ secret: "Sh! Esto es un secreto" }));
app.use(cookieParser());
app.use(rememberAuthMiddleware);

//uso de metodo para capturar info de forms
app.use(express.urlencoded({ extended: false }));

//Template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routing //

const rutasMain = require("./routes/mainRoute");
const rutasProducts = require("./routes/productsRoute");
const rutasUsers = require("./routes/usersRoute");
const rememberMiddleware = require("./middlewares/rememberAuthMiddleware");

app.use("/", rutasMain);
app.use("/products", rutasProducts);
app.use("/user", rutasUsers);

//Error
// app.use((req, res, next) => next(createError(404))); <= ARREGLAR

// Servidor //
app.listen(3000, () => {
  console.log("servidor en puerto 3000");
});
