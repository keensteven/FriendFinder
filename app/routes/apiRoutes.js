// LOAD DATA - linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

var friends = require("../data/friends");

// ROUTING

module.exports = function(app) {
  // API GET Requests - handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests - handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friends array)

  app.post("/api/friends", function(req, res) {

    let friend = req.body;
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (friends.length < 5) {
    //   friends.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
    console.log(req);
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};

// calculate scores with reduce method first
// then push the new friend to the array that came through the post