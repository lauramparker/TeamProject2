const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
  });

  User.associate = (model) => {
    User.hasMany(models.Travel, {
      onDelete: 'cascade',
    });
  };
  return User;
}