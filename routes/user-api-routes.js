// *********************************************************************************
// user-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

var bcrypt = require('bcrypt');
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/user", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.User.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get route for retrieving a single user
  app.get("/api/user/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for creating a new user profile
  app.post("/api/user", function(req, res) {
   console.log(req.body);
   db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      picture: req.body.picture,
      interests: req.body.interests, 
      UserId: req.body.userId,
   })
   .then(function(dbUser) {
     res.json(dbUser);
   });
 });

  // DELETE route for deleting a user profile
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // PUT route for updating a User's information
  app.put("/api/user", function(req, res) {
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  });















////////////////////////////////////
//ryan's crazy stuff
   app.post("/api/login", function (req, res) {
    //will show our user data from front end
    console.log(req.body)
    //will see the currently formatted session object with user data
    console.log(req.session)
    //initalizing user data variable to an empty object. this will hold our user data on this endpoint
    var user = {};
    //using our users model to query our MySQL database for user info where ther username equals the username we passed in from the front end
    db.users.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(function (dbData) {
        //if the database does not find a user with that username we will revice a null value from our database. null values are a little "special" in relation to JS.
        //this is how we would correctly do a check for a null value if recieved
        if (!dbData && typeof dbData === "object"){
          //this will send an error code to our front end for the user not existing
          res.status(404).send('ohhh no, there is a problem with the username or password!')
        }else{
          //here we bring in bcrypt. bcrypt's compair method asks for a few things. it asks for the first parameter you send in a plain text password. 
          //AKA: our users password coming in from the front end. the second parameter bcrypt wants us to pass in the hashed password that we stored in the db. lastly it wants a callback funtion
          //bcrypt will hash the pasword coming in from the front end and compaire it to the users hashed password from our database it will give us a boolean value to let us know if the 
          //passwords were the same
          bcrypt.compare(req.body.password, dbData.dataValues.password, function (err, bcryptRes) {
            // bcryptRes == true or false

            //if the response is false send an error to the front end letting the user know that the passwords did not match.
            if (!bcryptRes) {
              res.status(404).send('ohhh no, there is a problem with the username or password!')
            }else{
              //if the response from bcrypt was true we know our users password matched and we can now format the user data coming from the database to be sent to the font end
              var userObj = {
                id: dbData.dataValues.id,
                name: dbData.dataValues.name,
                email: dbData.dataValues.email,
                picture: dbData.dataValues.picture
              }
              //here the session's user object is updated with the users data. we can hit our /session endpoing witha  get request from the front end and get our user object.
                req.session.user = userObj;
             //we update the loggedIn key to have a true value. we can use this value on the fron end to see if the user is logged in or not.
              req.session.user.loggedIn = true;
              
              console.log(dbData.dataValues)
              res.json(req.session.user)
            }
          });
        }
      });
  })

// signin enpoint logic
  app.post("/api/signUp", function (req, res) {
    console.log(req.body)
    //to store a hased password into the database we need to first salt our password. this will tell bcrypt how many time to pass through the users password to generate the hash
    bcrypt.genSalt(10, function (err, salt) {
      //the bcrypt hash method will then 
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        // Store hash in your password DB.
        req.body.password = hash;
          db.users.create(req.body).then(function (dbData) {
            var userObj = {
              id: dbData.dataValues.id,
              name: dbData.dataValues.name,
              email: dbData.dataValues.email,
              picture: dbData.dataValues.picture
            }
            req.session.user = userObj;
            req.session.user.loggedIn = true;
            res.json(req.session.user);
          });
      });
    });
  });
  //endpoint for grabbing session user object to be used accrossed entire app.
  app.get("/api/session", function(req, res, next){
    res.json(req.session.user)
  });
  
  //get user info endpoint via query params
  app.get('/api/profile/:username', function(req, res, next){
    console.log(req.param);
    db.users.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(dbData){
      console.log(dbData)
      var userObj = {
        id: dbData.dataValues.id,
        name: dbData.dataValues.name,
        username: dbData.dataValues.username,
        email: dbData.dataValues.email,
        picture: dbData.dataValues.picture
      }
      req.session.user.loggedIn = true;
      req.session.user = userObj;
      res.json(userObj)
    })
  });
  //update profile route
  app.put('/api/update/:username', function(req, res, next){
    req.session.user = req.body
    var loggedUser = req.session.user;
    if(true){
      db.users.update({
        username: loggedUser.username,
        name: loggedUser.name,
        email: loggedUser.email,
        picture: loggedUser.picture
      }, {
          where: {
            username: req.params.username
          }
        }).then(function (dbData) {
          res.json(dbData.dataValues)
        })
    }else{
      res.status(404).json("please log in to update profile")
    }
  });

};
