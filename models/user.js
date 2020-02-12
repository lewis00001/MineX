var bcrypt = require("bcryptjs");

// users table creation in Model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"] //allow only letters
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"] //allow only letters
      }
    },
    userName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    passw: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    }
  });

  //encryption method for User Model
  User.generateHash = function(password) {
    return bcrypt.hashSync(password, 10);
  };

  User.prototype.compareHash = function(password) {
    return bcrypt.compareSync(password, this.passw);
  };

  User.associate = function(models) {
    User.belongsToMany(models.rocket, {
      as: "rocket",
      through: "usersRocket",
      foreignKey: "rocketId"
    });
    // User.belongsToMany(models.asteroid, {
    //   as: "asteroid",
    //   through: "usersAsteroid",
    //   foreignKey: "asteroidId"
    // });
    // User.belongsToMany(models.command_center, {
    //   as: "cmdCntr",
    //   through: "usersCmdCntr",
    //   foreignKey: "CmdCntrId"
    // });
  };
  return User;
};
