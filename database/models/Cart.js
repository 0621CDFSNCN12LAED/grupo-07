const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
    const Cart = sequelize.define(
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

 
    Cart.associate = (models) => {
        Cart.belongsTo (models.User, { as: "users", foreignKey: "id_user"});
        Cart.belongsToMany(models.Product, {
            as: "products",
            through: "carts_products",
            foreignKey: "id_cart",
            otherKey: "id_product",
            timestamps: false,
        });
    
    };

    return Cart;
};


