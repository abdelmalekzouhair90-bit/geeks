// ======= Exercise: 1

const people = ["Greg", "Mary", "Devon", "James"];

// Part I
people.shift();                   
people[people.indexOf("James")] = "Jason"; 
people.push("zouhair");           

console.log(people.indexOf("Mary"));  

const copy = people.slice(1, -1);  

const last = people[people.length - 1]; 

// Part II
for (let person of people) {
  console.log(person);
}

for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}


// ===== Exercise: 2


const colors = ["blue", "black", "green", "purple", "silver"];


for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    const suffix = suffixes[i];         
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}


// ===== Exercise: 3


let number = prompt("Please enter a number:");

console.log(typeof number); 

number = Number(number);     

while (number < 10) {
 
    number = prompt("The number is too small! Please enter a number >= 10:");

    number = Number(number);

    if (number === null) {
        console.log("User cancelled.");
        break;
    }
}

// When we exit the loop, the number is 10 or bigger (or user cancelled)
console.log("Finally! You entered:", number);


// ======= Exercise: 4 


const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};


console.log(building.numberOfFloors);


console.log(
  building.numberOfAptByFloor.firstFloor +
  building.numberOfAptByFloor.thirdFloor
);


const secondTenant = building.nameOfTenants[1];
const roomsOfSecondTenant = building.numberOfRoomsAndRent.dan[0];

console.log(secondTenant, roomsOfSecondTenant);


const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan[1]);


// ======= Exercise: 5


const family = {
  father: "Ahmed",
  mother: "Fatima",
  son: "Youssef",
  daughter: "Sara"
};

for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}

// ===== Exrcise: 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());


// ===== Exrcise: 6

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let letters = [];

for (let i = 0; i < names.length; i++) {
  letters.push(names[i][0]);
}

letters.sort();

const secretSociety = letters.join("");

console.log(secretSociety);
