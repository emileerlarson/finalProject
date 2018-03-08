// *********************************************************************************
// event-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the events in the database
  app.get("/api/event", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Event.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Get route for retrieving a single event
  app.get("/api/event/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Event.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // POST route for creating a new interesting event
  app.post("/api/event", function(req, res) {
   console.log(req.body);
   db.Event.create({
      title: req.body.title,
      category: req.body.category,
      date: req.body.date,
      month: req.body.month,
      year: req.body.year,
      time: req.body.time,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      description: req.body.description,
      UserId: req.body.userId,
   })
   .then(function(dbPost) {
     res.json(dbPost);
   });
 });

  // DELETE route for deleting an event
  app.delete("/api/event/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // PUT route for updating an event
  app.put("/api/event", function(req, res) {
    db.Event.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
};
