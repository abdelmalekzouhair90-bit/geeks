// --- PART 1: Basic Manipulation ---

// 1. Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// 2. Change "Pete" to "Richard"
// We find the first <ul>, then the second <li>
const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

// 3. Delete the second <li> of the second <ul> (Sarah)
const secondUl = lists[1];
const sarah = secondUl.children[1];
secondUl.removeChild(sarah);

// 4. Change the first <li> of each <ul> to your name
const myName = "zouhair"; 
lists.forEach(ul => {
    ul.firstElementChild.textContent = myName;
});


// --- PART 2: Classes ---

// 1. Add class "student_list" to both <ul>'s
lists.forEach(ul => ul.classList.add("student_list"));

// 2. Add "university" and "attendance" to the first <ul>
lists[0].classList.add("university", "attendance");


// --- PART 3: Styling ---

// 1. Add "light blue" background and padding to the <div>
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// 2. Do not display the <li> that contains "Dan"
// Dan is the last <li> of the second <ul>
const dan = secondUl.lastElementChild;
dan.style.display = "none";

// 3. Add a border to the <li> that contains "Richard"
const richard = lists[0].children[1];
richard.style.border = "2px solid orange";

// 4. Change the font size of the whole body
document.body.style.fontSize = "18px";


// --- BONUS ---

// Check background color and alert users
if (containerDiv.style.backgroundColor === "lightblue") {
    const user1 = lists[0].firstElementChild.textContent; // Gemini
    const user2 = lists[1].firstElementChild.textContent; // Gemini
    alert(`Hello ${user1} and ${user2}`);
}