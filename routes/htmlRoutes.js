var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/main/:id", function (req, res) {
    var user;
    var ore;

    db.userInfo.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbGet) {
      if (dbGet === null) {
        console.log("This is null");
      } else {
        user = dbGet.dataValues;
        getOreData();
      }
    });

    function getOreData() {
      db.userMinerals.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (dbGet) {
        if (dbGet === null) {
          console.log("This is null");
        } else {
          ore = dbGet.dataValues;
          renderPage();
        }
      });
    };

    function renderPage() {
      var renderThisObject = {
        userData: user,
        oreData: ore
      };
      res.render("MineX", renderThisObject);
    }
  });

  // logout hack
  app.get("/logout", function(req, res) {
    //req.logout();
    res.render("index");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
