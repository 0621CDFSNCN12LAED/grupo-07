const { Product } = require("../../database/models");

module.exports = {
    list: async (req, res) => {
        const products = await Product.findAll();
        return res.json(products);
    },

    // list: async (req, res) => {
    //     const products = await Product.findAll();
    //     return res.json({
    //         meta: {
    //             status: 200,
    //             total: products.length,
    //             url: "http://localhost:3000/api/products/",
    //         },
    //         data: products,
    //     });
    // },
    // list: (req, res) => res.send("hola"),
};
