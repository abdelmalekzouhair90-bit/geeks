// ===== Exercise 1
// PREDICTIONS & EXPLANATIONS for each case

// #1
function funcOne() {
    let a = 5;           // local variable 'a' created (block-scoped)
    if (a > 1) {
        a = 3;           // re-assigns the local 'a'
    }
    alert(`inside the funcOne function ${a}`);
}
// Prediction for #1.1 → funcOne() will alert: "inside the funcOne function 3"
// Reason: 'a' is local to funcOne (let is block-scoped), starts as 5, then changed to 3 inside if.

// #1.2 What if we use const instead of let?
// → Error: Assignment to constant variable.
// Reason: const cannot be reassigned → a = 3 would throw TypeError

// ------------------------------------------------------------------

// #2
// 
var a = 0;               // global variable 'a'

function funcTwo() {
    a = 5;               // modifies the global 'a' (no local declaration)
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 run sequence:
// funcThree() → alerts: "inside the funcThree function 0"   (global a is still 0)
// funcTwo()   → changes global a to 5
// funcThree() → alerts: "inside the funcThree function 5"   (global a was modified)

// #2.2 if global a is const instead of let?
// → Error on funcTwo(): Assignment to constant variable.
// Reason: const prevents reassignment of the global variable

// ------------------------------------------------------------------

// #3
function funcFour() {
    window.a = "hello";   // explicitly creates / modifies global variable via window
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 run sequence:
// funcFour() → sets window.a = "hello" (global)
// funcFive() → alerts: "inside the funcFive function hello"
// Reason: when no local 'a' exists, JavaScript looks up the scope chain → finds window.a

// ------------------------------------------------------------------

// #4
var a = 1;               // global a = 1

function funcSix() {
    let a = "test";      // new local variable 'a' shadows the global one
    alert(`inside the funcSix function ${a}`);
}

// #4.1 → funcSix() alerts: "inside the funcSix function test"
// Reason: local 'a' inside funcSix hides (shadows) the global 'a'

// #4.2 if inner variable is const instead of let?
// → No difference in this case → still alerts "test"
// Reason: const or let both create block-scoped variables that shadow the outer one.
//         The only difference would appear if we tried to reassign it inside the function.

// ------------------------------------------------------------------

// #5
var a = 2;               // outer block / global a = 2

if (true) {
    let a = 5;           // completely new block-scoped variable inside the if
    alert(`in the if block ${a}`);      // → 5
}

alert(`outside of the if block ${a}`);  // → 2

// #5.1 Predictions:
// First alert (inside if): "in the if block 5"
// Second alert (outside): "outside of the if block 2"
// Reason: let creates block scope → the 'a' inside if is a different variable

// #5.2 if we use const instead of let in both places?
// → Exactly the same behavior (5 inside, 2 outside)
// Reason: const is also block-scoped → same scoping rules as let

// ===== Exercise 2
// 1. Transform winBattle to an arrow function
const winBattle = () => true;

// 2. & 3. Create experiencePoints with ternary operator
const experiencePoints = winBattle() ? 10 : 1;

// 4. Log the result
console.log(experiencePoints);   // → 10
// ===== Exercise 3


const isString = (value) => typeof value === 'string';
console.log(isString('hello'));          // true
console.log(isString('123'));            // true
console.log(isString([1, 2, 4, 0]));     // false
console.log(isString(42));               // false
console.log(isString(true));             // false
console.log(isString(null));             // false
console.log(isString(undefined));        // false
console.log(isString(new String('hi'))); // true  ← also correct (wrapper object)


// ===== Exercise 4

// ===== Exercise ...