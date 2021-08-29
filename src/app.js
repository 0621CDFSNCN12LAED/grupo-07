const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.set("view engine", "ejs");

// Routing //

const rutasMain = require("./routes/main");
const rutasProductos = require("./routes/products");

app.use("/productos", rutasProductos);
app.use("/", rutasMain);

// Servidor

app.listen(3000, () => {
    console.log("servidor en puerto 3000");
});

//Poner en routes y en controllers //

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "views/productCart.html"));
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "views/productDetail.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/productos", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/productos.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/contacto.html"));
});

app.get("/filosofia", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/filosofia.html"));
});

app.get("/fitoterapia", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/fitoterapia.html"));
});
