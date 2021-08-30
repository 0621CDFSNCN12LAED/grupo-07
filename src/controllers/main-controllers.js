module.exports= {
    index: (req, res) => {
        res.render("index");
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    productDetail: (req, res) => {
        res.render("productDetail");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productForm: (req, res) => {
        res.render("productForm");
    },
    productos: (req, res) => {
        res.render("productos");
    },  
    fitoterapia: (req, res) => {
        res.render("fitoterapia");
    },
    infoplantas: (req, res) => {
        res.render("infoplantas");
    },
}
    