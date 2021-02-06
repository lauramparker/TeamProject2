const express = require('express');
const session = require("express-session");
const passport = require("./config/passport");
var exphbs = require("express-handlebars");
var path = require('path');

// Require routes
const reviewRoutes = require("./controller/review-controller");
const userRoutes = require("./controller/user-controller");
const searchRoutes = require("./controller/search-controller");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;


// Requiring our models for syncing
const db = require('./models');


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set handlebar routes
app.get('/handlebars', function (req, res) {
  res.render('allreviews');
});

// Static directory
app.use(express.static(path.join(__dirname, '/public')));

//Passport sessions
app.use(session({ secret: "keyboard cat" }));<button type="submit" class="btn btn-primary btn-lg" id="searchBtn">Submit</button>
app.use(passport.initialize());
app.use(passport.session());

// Invoke routes
app.use(reviewRoutes);
app.use(userRoutes);
app.use(searchRoutes);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
