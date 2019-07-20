// LOAD DATA - linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

var friends = require("../data/friends");

// ROUTING

module.exports = function (app) {
  // API GET Requests - handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST Requests - handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friends array)

  app.post("/api/friends", function (req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // let myvalues = req.body;

    console.log(req.body)
    // res.send("route works")

    // Take the result of the user's survey POST and parse it
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    // This variable will calculate the difference between the user's scores and the scores of each user in the database
    var totalDifference = 0;

    // Loop through all the friend possibilities in the database
    for (var i = 0; i < friends.length; i++) {

      console.log(friends[i]);
      totalDifference = 0;

      // loop through all the scores of each friend
      for (var j = 0; j < friends[i].scores[j]; j++) {

        // calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // If the sum of differences is less than the differences of the current best match
        if (totalDifference <= bestMatch.friendDifference) {

          // Reset the bestMatch to be the new friend.
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    // save the user's data to the database (this has to happen AFTER the check. otherwise, the db will always return that the user is the user's best friend)
    friends.push(userData);

    //return a json with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friends.length = 0;
    waitListData.length = 0;

    res.json({
      ok: true
    });
  });
};

// calculate scores with reduce method first
// then push the new friend to the array that came through the post