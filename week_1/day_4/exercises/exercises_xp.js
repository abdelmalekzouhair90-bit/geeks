// ===== Exercise 1

function funcOne() {
    let a = 5;          
    if (a > 1) {
        a = 3;          
    }
    alert(`inside the funcOne function ${a}`);
}

var a = 0;              

function funcTwo() {
    a = 5;               
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}




function funcFour() {
    window.a = "hello";   
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}


var a = 1;             

function funcSix() {
    let a = "test";      
    alert(`inside the funcSix function ${a}`);
}


var a = 2;           

if (true) {
    let a = 5;          
    alert(`in the if block ${a}`);      
}

alert(`outside of the if block ${a}`);  


// ===== Exercise 2

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;


console.log(experiencePoints);   // → 10
// ===== Exercise 3


const isString = (value) => typeof value === 'string';
console.log(isString('hello'));          
console.log(isString('123'));            
console.log(isString([1, 2, 4, 0]));     
console.log(isString(42));               
console.log(isString(true));             
console.log(isString(null));             
console.log(isString(undefined));        
console.log(isString(new String('hi'))); 


// ===== Exercise 4
const sum = (a, b) => a + b;

// ===== Exercise 5

function kgToGramsDeclaration(kg) {
    return kg * 1000;
}
console.log(kgToGramsDeclaration(5));       

const kgToGramsExpression = function(kg) {
    return kg * 1000;
};
console.log(kgToGramsExpression(3.5));    


console.log("Difference: Function declaration is hoisted → can be called before definition; function expression is not hoisted → must be defined before calling.");

const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(2.7));           
      

// ===== Exercise 6


(function(children, partner, location, job) {
    
    const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    

    const p = document.createElement('p');
    p.textContent = sentence;

    p.style.fontSize = '1.2rem';
    p.style.fontFamily = 'system-ui, sans-serif';
    p.style.margin = '2rem 0';
    p.style.padding = '1rem';
    p.style.backgroundColor = '#f8f9fa';
    p.style.borderRadius = '8px';
    p.style.maxWidth = '600px';
    
    document.body.appendChild(p);
    

})(3, "Sarah", "Barcelona", "senior UX designer");


// ===== Exercise 7


