var db = require("../models");
var { registerValidation } = require("../validation");

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

    var {error} = registerValidation(req.body);

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
