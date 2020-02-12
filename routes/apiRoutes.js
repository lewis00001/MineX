var db = require("../models");

// Validation
var Joi = require('@hapi/joi');

var schema = Joi.object({ 
  firstName: Joi.string() .min(6) .required(),
  lastName: Joi.string() .min(6) .required(),
  email: Joi.string() .min(6) .required() .email(),
  password: Joi.string() .min(6) .required() 
});

module.exports = function(app) {
  // app.get("/api/all", function(req, res) {
  //   db.userInfo.findAll({}).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  app.get("/api/find/:email/:password", function(req, res) {
    db.userInfo
      .findOne({
        where: {
          email: req.params.email,
          password: req.params.password
        }
      })
      .then(function(dbPost) {
        if(dbPost !== undefined || dbPost !== null) {
          res.json(dbPost.dataValues)
        };
      });
  });

  // POST route for saving a new post
  app.post("/api/new", function(req, res) {
    // Lets valid the data before a user
    var { error } = schema.validate(req.body);
    // console.log(error.details[0].message);

    if(error) {
      return res.json(error.details[0].message)
      // return res.status(400).send(error.details[0].message)
    } else {
      db.userInfo
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    }
  });
};
