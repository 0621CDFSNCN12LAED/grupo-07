const { Product } = require("../../database/models");

module.exports = {
    list: async (req, res) => {
        const products = await Product.findAll();
        return res.json({
            meta: {
                status: 200,
                count: products.length,
                url: "http://localhost:3000/api/products/",
                countByCategory: {
                    belleza: products.filter(
                        (product) => product.category == "Belleza"
                    ).length,
                    higiene: products.filter(
                        (product) => product.category == "Higiene"
                    ).length,
                    salud: products.filter(
                        (product) => product.category == "Salud"
                    ).length,
                },
            },
            data: products,
        });
    },
    detail: async (req, res) => {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.json({
                meta: {
                    status: 404,
                    url: "http://localhost:3000/api/products/" + req.params.id,
                },
                data: `No se encontró el producto con id: ${req.params.id}`,
            });
        }
    },
};
