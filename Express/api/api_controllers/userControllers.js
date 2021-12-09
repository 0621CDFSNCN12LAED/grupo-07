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
};
