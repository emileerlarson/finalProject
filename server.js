const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// Serve up static assets
app.use(express.static("client/build"));

app.use(session({
  secret: "dog",//change this to be hidden on heroku 
  resave: false,
  saveUninitialized: true
}));

//middleware for setting up a user object when anyone first come to the appplication
function userSetup(req, res, next){
  if(!req.session.user){
    req.session.user = {}
    req.session.user.loggedIn = false;
  }
  next()
}

//using middlewhere acrossed the entire application before any route gets hit.
app.use(userSetup)
// Add routes, both API and view
// app.use(routes);

var db = require("./models");

require("./routes/html-routes.js")(app)
require("./routes/user-api-routes.js")(app)

// Start the API server
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

app.get("/profile/:id", function(req, res) {
  db.User.findOne({_id: req.params.id })
  .populate("interests")
  .populate("userName")
  .then(function(dbUser) {
    res.json(dbUser);
  })
  .catch(function(err) {
   res.json(err); 
  })
});
