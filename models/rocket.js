module.exports = function(sequelize, Sequelize) {
  var Rocket = sequelize.define("rocket", {
    name: Sequelize.STRING,
    storage: Sequelize.INTEGER,
    price: Sequelize.INTEGER
  });

  Rocket.associate = function(models) {
    Rocket.belongsToMany(models.users, {
      as: "users",
      through: "usersRocket",
      foreignKey: "rocketId"
    });
  };

  return Rocket;
};
