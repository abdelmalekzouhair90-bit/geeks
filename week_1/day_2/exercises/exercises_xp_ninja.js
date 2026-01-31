// ===== Exercise 1
function displayNumbersDivisible(divisor = 23) {
    let sum = 0;          
    let outcome = "";     

    // Loop through numbers 0 to 500
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

    // Calculate  the total ....
    let totalChange = (amountOfChange[0] * wuarterVlue) +
                      (amountOfChange[1] * dimeValue) +
                      (amountOfChange[2] * nickelValue) +
                      (amountOfChange[3] * pennyValue);

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
        total = total * 0.95; // Applying 5% discount
    }
    return total;
}

// Main Function to calculate everything
function totalVacationCost() {
    let nights, destination, days;

    // Validation for Hotel Nights
    do {
        nights = prompt("How many nights would you like to stay?");
    } while (isNaN(nights) || nights === "" || nights === null);

    // Validation for Destination
    do {
        destination = prompt("What is your destination?");
    } while (!isNaN(destination) || destination === "" || destination === null);

    // Validation for Car Rental Days
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (isNaN(days) || days === "" || days === null);

    // Calculate individual costs
    const hotel = hotelCost(Number(nights));
    const plane = planeRideCost(destination);
    const car = rentalCarCost(Number(days));

    const total = hotel + plane + car;

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total Vacation Cost: $${total}`);
    
    return total;
}

// Start the program
totalVacationCost();


// ===== Exercise 5

