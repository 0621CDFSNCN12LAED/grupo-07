const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
    const model = sequelize.define(
        "Cart",
        {
            total_price: DataTypes.DECIMAL,
            date: DataTypes.DATE,
            user_id: DataTypes.INTEGER,
        },
        {
            tableName: "carts",
            timestamps: false,
        }
    );

    //Asociaciones
    model.associate = (models) => {
        model.belongsTo(models.User, { as: "user", foreignKey: "id_user" });
        model.belongsToMany(models.Product, {
            as: "products",
            through: "compra_producto",
            foreignKey: "ID_cart",
            otherKey: "ID_product_id",
            timestamps: false,
        });
    };

    return model;
};
