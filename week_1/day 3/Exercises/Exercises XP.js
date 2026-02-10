// ===== Exercise 1
function displayNumbersDivisible(divisor = 23) {
    let sum = 0;          
    let outcome = "";     

   
    for (let i = 0; i <= 500; i++) {
        // Check if the current number is divisible by the divisor
        if (i % divisor === 0) {
            outcome += i + " "; 
            sum += i;           
        }
    }
    console.log("Outcome: " + outcome.trim());
    console.log("Sum: " + sum);
}

// --- Testing the function ---

console.log("--- Test: Divisor 23 ---");
displayNumbersDivisible(23);





// ===== Exercise 2

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalCost = 0;

    for( const item of shoppingList ) {
        if( item in stock && stock[item] > 0 ) {
            totalCost += prices[item];
            stock[item] -= 1; 
            console.log(`${item} added to bill. Price: $${prices[item]}. Stock left : ${stock[item]}`);
        }
        else{
            console.log(`${item} is out of stocke!.`);
        }
        return totalCost;
    }
    // call the function and see the resukt
    const finallBill = myBill();
    console.log("Total Bill:", finallBill);
}


// ===== Exercise 3


function changeEnough(itemPrice, amountOfChange) {
    const wuarterVlue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

   const values = [quarterValue, dimeValue, nickelValue, pennyValue];

const totalChange = amountOfChange.reduce(
  (sum, amount, index) => sum + amount * values[index],
  0
);


    if (totalChange >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); 

console.log(changeEnough(14.11, [2, 100, 0, 0]));

console.log(changeEnough(0.75, [0, 0, 20, 5]));

// ===== Exercise 4


function hotelCost(numNights) {
    const costPerNight = 140;
    return numNights * costPerNight;
}


function planeRideCost(destination) {
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}


function rentalCarCost(numDays) {
    let total = numDays * 40;
    if (numDays > 10) {
        total = total * 0.95; 
    }
    return total;
}

function totalVacationCost() {
    let nights, destination, days;


    do {
        nights = prompt("How many nights would you like to stay?");
    } while (isNaN(nights) || nights === "" || nights === null);

   
    do {
        destination = prompt("What is your destination?");
    } while (!isNaN(destination) || destination === "" || destination === null);

 
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (isNaN(days) || days === "" || days === null);

  
    const hotel = hotelCost(Number(nights));
    const plane = planeRideCost(destination);
    const car = rentalCarCost(Number(days));

    const total = hotel + plane + car;

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total Vacation Cost: $${total}`);
    
    return total;
}


totalVacationCost();


// ===== Exercise 5
// --- PART 1: Basic Manipulation ---


const containerDiv = document.getElementById("container");
console.log(containerDiv);


const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

const secondUl = lists[1];
const sarah = secondUl.children[1];
secondUl.removeChild(sarah);


const myName = "zouhair"; 
lists.forEach(ul => {
    ul.firstElementChild.textContent = myName;
});


// --- PART 2: Classes ---


lists.forEach(ul => ul.classList.add("student_list"));

lists[0].classList.add("university", "attendance");


// --- PART 3: Styling ---

containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

const dan = secondUl.lastElementChild;
dan.style.display = "none";

const richard = lists[0].children[1];
richard.style.border = "2px solid orange";

document.body.style.fontSize = "18px";


// --- BONUS ---

if (containerDiv.style.backgroundColor === "lightblue") {
    const user1 = lists[0].firstElementChild.textContent; 
    const user2 = lists[1].firstElementChild.textContent; 
    alert(`Hello ${user1} and ${user2}`);
}

// ===== Exercise 6

const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newListItem = document.createElement("li");

const logoutText = document.createTextNode("Logout");

newListItem.appendChild(logoutText);


const list = navDiv.firstElementChild; 
list.appendChild(newListItem);


const firstLi = list.firstElementChild;
const lastLi = list.lastElementChild;

console.log("First item text:", firstLi.textContent);
console.log("Last item text:", lastLi.textContent);


// ===== Exercise 7

const allBooks = [
    {
        title: "Le Sahara Marrocain",
        author: "Hubert Seillan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjGT1P4_jx1CQmYzzPB1eXDpZhf1bj3NVFQ&s",
        alreadyRead: true
    },
    {
        title: "Philosophie et Historique",
        author: "Abdellah ElAroui",
        image: "https://bookslibrary.com/files/s-books-library.com-08172314Oh5F3.jpg",
        alreadyRead: false
    }
];


const bookSection = document.querySelector(".listBooks");


allBooks.forEach(book => {
    // Create a div for each book
    const bookDiv = document.createElement("div");


    const bookInfo = document.createElement("p");
    bookInfo.textContent = `${book.title} written by ${book.author}`;


    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px"; 

    if (book.alreadyRead) {
        bookInfo.style.color = "red";
    }

   
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookImage);
    
    bookSection.appendChild(bookDiv);
});