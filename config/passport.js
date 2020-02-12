var LocalStrategy = require("passport-local").Strategy;

// Load db
var db = require("../models");

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  //REGISTER -local strategy utilizes username and local pw, but will override with email instead for the username
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "passw",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, passw, done) {
        console.log(req.body);
        console.log(email);
        console.log(passw);

        process.nextTick(function() {
          db.users
            .findOne({
              where: {
                email: email
              }
            })
            .then(function(user, err) {
              console.log("Hello fellow miners", user);

              //if email is already registered
              if (user) {
                console.log("user ****", user);
                return done(null, false, {
                  from: "signup",
                  message: "This email is already registered."
                });
              } else {
                //Create new account in database
                console.log("user ####", user);
                db.users
                  .create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    userName: req.body.userName,
                    email: email,
                    passw: db.users.generateHash(passw)
                  })
                  .then(function(newUser) {
                    console.log("new user", newUser);
                    return done(null, newUser);
                  })
                  .catch((err) => console.log(err));
              }
            });
        });
      }
    )
  );

  // LOGGIN-IN - same as register will use email instead of username to login and authentication
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "passw",
        passReqToCallback: true
        //Pass back the request to the callback and match user
      },
      function(req, email, passw, done) {
        db.users
          .findOne({
            where: {
              email: email
            }
          })
          .then(function(user, err) {
            if (err) {
              console.log("err ????", err);
              return done(err);
            }

            if (!user) {
              console.log("$$$$", !user);
              return done(null, false, {
                from: "login",
                message: "Incorrect email/ password combination."
              }); // req.flash is the way to set flashdata using connect-flash
            }
            // correct user but wrong password
            if (user && !user.compareHash(req.body.passw)) {
              console.log("***wrong password", user, err);
              return done(null, false, {
                from: "login",
                message: "Incorrect email and/or password."
              }); // create the loginMessage and save it to session as flashdata
            }
            // successful user login
            console.log("logging in ****", user);
            return done(null, user);
          });
      }
    )
  );
};
