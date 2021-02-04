module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull:false,
    },
  });

  User.associate = (model) => {
    User.hasMany(model.Travel, {
      onDelete: 'cascade',
    });
  };
  return User;
}