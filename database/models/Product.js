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

Product.associate = (models) => {
  Product.belongsToMany (models.Cart, 
    { as: "carts", 
    through: "carts_products",
    foreignKey: "id_product",
    otherKey: "id_cart",
    timestamps: false,
});
};
return Product;
}