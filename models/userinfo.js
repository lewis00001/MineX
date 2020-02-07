
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");


// Creates a "userinfo" model that matches up with DB
var Userinfo = sequelize.define("userinfo", {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    user_name: Sequelize.STRING,
    password: Sequelize.STRING,
    reenter_password: Sequelize.STRING,
    email: Sequelize.STRING
  });

// Syncs with DB
Userinfo.sync(); 


module.exports = Userinfo; 