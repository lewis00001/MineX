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
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false
    }
  );

  return Userinfo;
};
