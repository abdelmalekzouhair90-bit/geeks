// ===== Exercise 1
for (let i = 1; i <= 6; i++) {
    let row = ""; 
      for (let j = 1; j <= i; j++) {
        row += "* "; 
    }
    
    console.log(row);
}

// ===== Exercise 2
  



const isBlank = (str) => {
    // Check if the string length after trimming whitespace is zero
    // trim() removes spaces from both sides
    return str.trim().length === 0;
};

// Testing the function ---

const text1 = "";          
const text2 = "   ";       
const text3 = "zouhair";    

console.log(`Is text1 blank? ${isBlank(text1)}`); // Output: true
console.log(`Is text2 blank? ${isBlank(text2)}`); // Output: true
console.log(`Is text3 blank? ${isBlank(text3)}`); // Output: false
// ===== Exercise 3


/**
 * Function to abbreviate a string/name
 * Taking the first word and the initial of the second word
 */
const abbrevQuote = (text) => {
    // 1. Split the quote into an array of words
    const wordsArray = text.trim().split(" ");
    
    // 2. If there are at least two words, keep the first word 
    // and take the first character of the second word
    if (wordsArray.length > 1) {
        return `${wordsArray[0]} ${wordsArray[1].charAt(0).toUpperCase()}.`;
    }
    
    // 3. Return as is if it's only one word
    return wordsArray[0];
};

// The English translation of the Islamic quote
const islamicQuote = "Knowledge cannot be attained through the ease of the body";

// --- Testing the function ---
console.log(abbrevQuote(islamicQuote)); 
// Output: "Knowledge C."
// ===== Exercise 4

// ===== Exercise ...