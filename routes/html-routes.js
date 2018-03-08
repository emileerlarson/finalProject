// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // root route loads index.html, which is our landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landingPage.html"));
  });

  //  add event route loads addEvent.html which is a form to create an interesting event
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addEvent.html"));
  });

  // profile route loads profile.html to create and update their profile information
  app.get("/profile/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  }); 

  // home route loads index.html which shows all of their interests in react cards
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
