module.exports = function(sequelize, Sequelize) {
  var Rocket = sequelize.define("rocket", {
    name: Sequelize.STRING,
    storage: Sequelize.INTEGER,
    price: Sequelize.INTEGER
  });
  return Rocket;
}