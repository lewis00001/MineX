module.exports = function(sequelize, Sequelize) {
  var Userinfo = sequelize.define(
    "userInfo",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      rocketName: {
        type: Sequelize.STRING
      },
      funds: {
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false
    }
  );

  return Userinfo;
};
