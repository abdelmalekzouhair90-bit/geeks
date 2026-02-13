// ===== Exercise 1

// the Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// ===== Exercise 2
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));


// ===== Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1:
const usersArray = Object.entries(users);
console.log(usersArray);

// Part 2:
const doubledUsers = usersArray.map(([key, value]) => [key, value * 2]);
console.log(doubledUsers);


