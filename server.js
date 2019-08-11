var express = require('express');
// Tells node that we are creating an "express" server
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

// LISTENER - effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

