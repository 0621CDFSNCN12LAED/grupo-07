const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define(
    //alias
    "Product",

    //cols
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      deleted: DataTypes.INTEGER,
      category: DataTypes.STRING,
      stock: DataTypes.INTEGER,
    },

    //config
    {
      tableName: "products",
      timestamps: false,
    }
  );

  //Asociaciones
  Product.associate = (models) => {
    Product.belongsToMany(models.Cart, {
      as: "carts",
      through: "carts_products",
      foreignKey: "id_product",
      otherKey: "id_cart",
      timestamps: false,
    });
  };
  return Product;
}