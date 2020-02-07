//connects our required packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var tables = require("cli-table2");


//connection to variable that will then connect to mysql database 
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Thomaskorolog1",  //**NEED TO DELETE 
  database: "userinfo_db",
  port: 3306
});


connection.connect(); //calls it


//uses the cli-table2 package to display the data table from mysql 
var display = function () {
  connection.query("SELECT * FROM userinfo", function (err, res) {
    if (err) throw err;
    console.log("------------------------------");  //the decoration 
    console.log("Welcome To MineX!");
    console.log("------------------------------");
    console.log("");
    console.log("Please fill out the info bellow");
    console.log("");


    //the table variable that connects to the cli-table2 
    var table = new tables({
      head: ["First Name", "Last Name", "User Id", "Password"],
      colWidths: [20, 20, 20, 20],
     
      style: {
        head: ["aqua"],
        compact: true
      
      }
    });


    
  });

    display(); //calls it 