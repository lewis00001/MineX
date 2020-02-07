
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");



// Creates a "rocket" model that matches up with DB
var Rocket = sequelize.define("rocket", {
    id: Sequelize.STRING,
    name: Sequelize.STRING,
    fuel_capacity: Sequelize.INTEGER,
    storage_capacity: Sequelize.INTEGER,
    price: Sequelize.INTEGER
  });


//sync with db 
Rocket.sync(); 

module.exports = Rocket; 

