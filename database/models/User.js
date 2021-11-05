const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "User",
    {
      id: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      admin: DataTypes.TINYINT,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  //Asociaciones
  model.associate = (models) => {
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
