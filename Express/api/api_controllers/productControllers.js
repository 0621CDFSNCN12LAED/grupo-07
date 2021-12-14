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
            data: products.map((product) => {
                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    category: product.category,
                    detail: "http://localhost:3000/api/products/" + product.id,
                    image: product.image,
                };
            }),
        });
    },
    detail: async (req, res) => {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.json({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                stock: product.stock,
                destacado: product.destacado ? "Sí" : "No",
                image:
                    "http://localhost:3000/images/product-images/" +
                    product.image,
            });
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
