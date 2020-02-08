module.exports = function(sequelize, Sequelize) {
  var Userinfo = sequelize.define("userinfo", {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    userName: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING
  });
  return Userinfo;
}