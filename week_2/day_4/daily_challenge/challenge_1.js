let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// 1. Arrow function that logs the 3 fruits using forEach
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

// You can test it:
// displayGroceries();
// → pear
// → apple
// → banana


// 2. Arrow function to demonstrate pass by value vs pass by reference
const cloneGroceries = () => {
    // A - Copying a primitive (string) → pass by value
    let user = client;          // user gets a copy of the value "John"
    
    client = "Betty";           // We change the original variable
    
    console.log("client:", client);   // → "Betty"
    console.log("user:", user);       // → "John"
    // → user is NOT affected because strings are passed by value (copied)


    // B - Copying the object → pass by reference
    let shopping = groceries;   // shopping points to THE SAME object as groceries
    
    // We modify the object through shopping
    shopping.totalPrice = "35$";
    
    console.log("groceries.totalPrice:", groceries.totalPrice);   // → "35$"
    console.log("shopping.totalPrice:", shopping.totalPrice);     // → "35$"
    // → BOTH changed because objects are passed by reference (same memory location)


    // C - Nested object modification (still reference!)
    shopping.other.paid = false;
    
    console.log("groceries.other.paid:", groceries.other.paid);   // → false
    console.log("shopping.other.paid:", shopping.other.paid);     // → false
    // → Again, both changed — nested objects are also shared by reference
};

// Run the demonstration
cloneGroceries();
