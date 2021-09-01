module.exports= {
    index: (req, res) => {
        res.render("index");
    },

    // users
    login: (req, res) => {
        res.render("users/login");
    },
    register: (req, res) => {
        res.render("users/register");
    },
    contacto: (req, res) => {
        res.render("users/contacto");
    },

    // products
    productDetail: (req, res) => {
        res.render("products/productDetail");
    },
    productCart: (req, res) => {
        res.render("products/productCart");
    },
    productForm: (req, res) => {
        res.render("products/productForm");
    },
    productos: (req, res) => {
        res.render("products/productos");
    },  
    fitoterapia: (req, res) => {
        res.render("products/fitoterapia");
    },

    // otras
    infoplantas: (req, res) => {
        res.render("infoplantas");
    },
    filosofia: (req, res) => {
        res.render("filosofia");
    },
}
    