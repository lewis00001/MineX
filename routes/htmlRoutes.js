var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/main/:id", function(req, res) {
    db.userInfo.findOne({ where: { id: req.params.id } }).then(function(dbGet) {
      if (dbGet === null) {
        console.log("This is null");
      } else {
        res.render("MineX", dbGet.dataValues);
      }
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
