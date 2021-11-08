const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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
  /*model.associate = (models) => {
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

  User.associate = (models) => {
    User.hasMany(models.Cart, { as: "carts", foreignKey: "id_user" });
    
  };
  return User;
};
