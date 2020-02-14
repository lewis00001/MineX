var db = require("../models");
var { registerValidation, loginValidation } = require("../validation");
var bcrypt = require("bcryptjs");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    db.userInfo.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/find/:email/:password", function(req, res) {
    var user;
    // Validate input
    var requestBody = {
      email: req.params.email,
      password: req.params.password
    };
    var { error } = loginValidation(requestBody);
    if (error) {
      return res.json(error.details[0].message);
    }

    // Check for valid email
    db.userInfo
      .findOne({
        where: {
          email: req.params.email
        }
      })
      .then(function(dbPost) {
        if (dbPost === null) {
          return res.json("Email or Password is incorrect");
        }
      });

    db.userInfo
      .findOne({
        where: {
          email: req.params.email
        }
      })
      .then(function(dbPost) {
        if (dbPost !== null) {
          user = dbPost.dataValues;
          checkPassword();
        }
      });
    // Check if password is correct
    async function checkPassword() {
      // Hash password
      var validPassword = await bcrypt.compare(
        req.params.password,
        user.password
      );
      if (!validPassword) {
        return res.json("Email or Password is incorrect");
      }
      findUser();
    }

    function findUser() {
      db.userInfo
        .findOne({
          where: {
            email: req.params.email
          }
        })
        .then(function(dbPost) {
          if (dbPost !== undefined || dbPost !== null) {
            res.json(dbPost.dataValues);
          }
        });
    }
  });

  // POST route for saving a new post
  app.post("/api/new", function(req, res) {
    // Validate input
    var { error } = registerValidation(req.body);
    if (error) {
      return res.json(error.details[0].message);
      // return res.status(400).send(error.details[0].message)
    }

    // Check to see if email already in use
    db.userInfo
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then(function(dbPost) {
        if (dbPost !== null) {
          return res.json("Email already exists");
        }
      });

    cryptThePassword();

    async function cryptThePassword() {
      // Hash password
      var salt = await bcrypt.genSalt(10);
      var hashPassword = await bcrypt.hash(req.body.password, salt);
      createUser(hashPassword);
    }

    function createUser(secretPassword) {
      // Create new user
      db.userInfo
        .create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: secretPassword,
          email: req.body.email
        })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    }
  });
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/'); 
  }); 
  
};
