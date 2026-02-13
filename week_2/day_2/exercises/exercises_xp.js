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

