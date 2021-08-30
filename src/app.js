const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public");

app.use(express.static(publicPath));
app.use(logger("dev"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));


// Routing //

const rutasMain = require("./routes/main");

app.use("/", rutasMain);

// Servidor //
app.listen(3000, () => {
    console.log("servidor en puerto 3000");
});


