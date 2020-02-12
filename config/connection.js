//Initiates the connection to mysql

// Dependencies
var Sequelize = require("sequelize");

// mySQL connection for userinfo_table
var sequelize = new Sequelize("mineX", "root", "root password here", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
