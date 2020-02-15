
var db = require("../models");


module.exports = function (app) {
  app.get("/api/all", function (req, res) {
    db.buy.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    });
  });


  app.get("/api/buy", function (req, res) {
    console.log(req.params.Moon_Dart);
    console.log(req.params.Galactic_Spike);
    console.log(req.params.Light_Bender);
    console.log(req.params.Star_Hammer);


    db.buy
      .findOne({
        where: {
          Moon_Dart: req.params.Moon_Dart,
          Galactic_Spike: req.params.Galactic_Spike,
          Light_Bender: req.params.Light_Bender,
          Star_Hammer: req.params.Star_Hammer
        }
      })
      .then(function (dbPost) {
        res.json(dbPost.dataValues);
      });
  });
