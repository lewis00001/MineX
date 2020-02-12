require("dotenv").config();
var express = require("express");
// var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");
// var passport = require("passport");
// var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 8080;

// //use local-stratey defined in config.passport folder
// require("./config/passport")(passport);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//Using session
// app.use(
//   session({
//     key: "user_sid",
//     secret: "as3i2Adkfj94tjals57f9asdf",
//     resave: true,
//     saveUninitialized: false,
//     cookie: {
//       expires: 600000,
//       httpOnly: false
//     }
//   })
// );

// passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
