//Initiates the connection to mysql


// Dependencies
var Sequelize = require("sequelize");

// mySQL connection for userinfo_table 
var sequelize = new Sequelize("userinfo_table", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// mySQL connection for rocket_table 
var sequelize = new Sequelize("rocket_table", "root", "", {
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