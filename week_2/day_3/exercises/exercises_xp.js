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


// ===== Exercise 4

/* 
The variable member is an instance of the Person class.
 In JavaScript, all class instances are objects, 
 so when we use typeof on it, it returns "object" because typeof only distinguishes primitive types from objects, 
not the specific class.

so the Output:  object
*/

// ===== Exercise 5

class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
  
  // the Correct Answer because : Calls super(name) first → initializes the parent (Dog) class. Then this.size = size is safe


};


// ===== Exercise 6


console.log([2] === [2]);
console.log({} === {});

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number);
console.log(object3.number);
console.log(object4.number);

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(soundStr) {
    return `${soundStr} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));


// ===== Exercise 7

