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

    //Asociaciones
    /*model.associate = (models) => {
        model.belongsTo(models.User, { as: "user", foreignKey: "id_user" });
        model.belongsToMany(models.Product, {
            as: "products",
            through: "compra_producto",
            foreignKey: "id_cart",
            otherKey: "id_product_id",
            timestamps: false,
        });
    };

    return model;
};
*/
Cart.associate = (models)=> {
    Cart.hasMany (models.Product, 
    {as: "products", foreignKey:"id_cart"});
    Cart.belongsTo (models.User, 
        {as: "users", foreignKey: "id_user"});      
};
return Cart;
}
