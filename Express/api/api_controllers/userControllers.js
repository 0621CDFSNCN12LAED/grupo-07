const { User } = require("../../database/models");

module.exports = {
    list: async (req, res) => {
        const users = await User.findAll({
            order: [["id", "ASC"]],
            offset: 0,
            limit: 10,
        });
        return res.json({
            meta: {
                status: 200,
                total: users.length,
                url: "http://localhost:3000/api/users/",
            },
            data: users,
        });
    },
    detail: async (req, res) => {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.json({
                meta: {
                    status: 404,
                    url: "http://localhost:3000/api/users/" + req.params.id,
                },
                data: `No se encontró el usuario con id: ${req.params.id}`,
            });
        }
    },
};
