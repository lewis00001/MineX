var db = require("../models");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    db.userInfo.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/find/:email/:password", function(req, res) {
    console.log(req.params.email);
    console.log(req.params.password);
    db.userInfo
      .findOne({
        where: {
          email: req.params.email,
          password: req.params.password
        }
      })
      .then(function(dbPost) {
        res.json(dbPost.dataValues);
      });
  });

  // POST route for saving a new post
  app.post("/api/new", function(req, res) {
    console.log(req.body);
    db.userInfo
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
