const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");

const app = express();

const methodOverride = require("method-override");

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

app.use(methodOverride("_method"));

app.use(
  session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookies());

app.use(userLoggedMiddleware);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));
app.listen(3000, () => console.log("Servidor levantado en el puerto 3000"));

// Template Engine
app.set("view engine", "ejs");

// Routers
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/user", userRoutes);


app.use((req, res, next) => {
  res.status(404).render("not-found");
});
