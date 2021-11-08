const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
    const Product = sequelize.define(
        "Product",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            description: DataTypes.STRING,
            image: DataTypes.STRING,
            delete: DataTypes.INTEGER,
            category: DataTypes.STRING,
        },
        {
            tableName: "products",
            timestamps: false,
        }
    );

    //Asociaciones
   /* model.associate = (models) => {
        model.belongsToMany(models.Cart, {
            as: "cart",
            through: "compra_producto",
            foreignKey: "id_product",
            otherKey: "id_cart",
            timestamps: false,
        });
    };

    return model;
};
*/


Product.associate = (models) => {
  Product.belongsTo (models.Cart, 
    { as: "cart", foreignKey: "id_cart" });
};
return Product;
}