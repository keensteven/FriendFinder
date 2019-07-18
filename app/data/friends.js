// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friends = [];
function Person(name, image, responses) {
    
      this.name = name;
      this.image = image;
      this.responses = responses;
      // save reduce method score here
    }

    friends.push(new Person('Michael','/userimages/michael.jpg', [1,2,3,4,1,2,3,4,1,1]));
    friends.push(new Person('Bob','b.jpg', [1,2,3,4,1,2,3,4,1,1]));
    friends.push(new Person('Michael','/userimages/michael.jpg', [1,2,3,4,1,2,3,4,1,1]));
    friends.push(new Person('Michael','/userimages/michael.jpg', [1,2,3,4,1,2,3,4,1,1]));
    friends.push(new Person('Michael','/userimages/michael.jpg', [1,2,3,4,1,2,3,4,1,1]));
    friends.push(new Person('Michael','/userimages/michael.jpg', [1,2,3,4,1,2,3,4,1,1]));

    // reduce method w3 to compare scores
          // Note how we export the array. This makes it accessible to other files using require.
          module.exports = friends;