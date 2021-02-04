const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done) {
    db.User.findOne({
      where: {
        email: email,
      }
    },
    function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { meesage: 'Incorrect email.' });
      }
      if (!user.validePassword(password)) {
        return done(null, false, { message: 'Incorrect password'});
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;