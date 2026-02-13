// ===== Exercise 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});


if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}


const hasViolet = colors.some(color => color === "Violet");

console.log(hasViolet ? "Yeah" : "No...");

// ===== Exercise 2


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];



colors.forEach((color, index) => {
  const position = index + 1;

  const suffix =
    position === 1 ? ordinal[1] :
    position === 2 ? ordinal[2] :
    position === 3 ? ordinal[3] :
    ordinal[0];

  console.log(${position}${suffix} choice is ${color}.);
});



// ===== Exercise 3

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);


const country = "USA";
console.log([...country]);


//  Bonus 
let newArray = [...[,,]];
console.log(newArray);
