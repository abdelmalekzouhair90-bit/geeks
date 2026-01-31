
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newListItem = document.createElement("li");

const logoutText = document.createTextNode("Logout");

// Append the text node to the <li>
newListItem.appendChild(logoutText);

//  Append the <li> to the <ul>

const list = navDiv.firstElementChild; 
list.appendChild(newListItem);

// Retrieve and display the text of the first and last <li>
const firstLi = list.firstElementChild;
const lastLi = list.lastElementChild;

console.log("First item text:", firstLi.textContent);
console.log("Last item text:", lastLi.textContent);