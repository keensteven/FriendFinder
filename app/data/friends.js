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

friends.push(new Person('Rolando', '/userimages/michael.jpg', [1, 2, 3, 4, 1, 2, 3, 4, 1, 1]));
friends.push(new Person('Bob', 'b.jpg', [1, 2, 3, 3, 3, 2, 5, 4, 5, 5]));
friends.push(new Person('Phillip', '/userimages/michael.jpg', [4, 2, 3, 3, 4, 2, 3, 4, 4, 4]));
friends.push(new Person('Sue', '/userimages/michael.jpg', [4, 2, 3, 4, 4, 2, 3, 2, 1, 1]));
friends.push(new Person('Jane', '/userimages/michael.jpg', [3, 2, 3, 4, 3, 2, 3, 4, 2, 1]));
friends.push(new Person('Ellen', '/userimages/michael.jpg', [3, 2, 5, 5, 1, 2, 5, 4, 1, 2]));

// reduce method w3 to compare scores
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;