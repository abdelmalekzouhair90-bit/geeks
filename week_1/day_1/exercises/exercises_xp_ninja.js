// ===== Exercise 1

let sentence = "This dinner is not that bad ! You cook well";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    

    let beforeNot = sentence.slice(0, wordNot);
    let afterBad = sentence.slice(wordBad + 3);
    
    console.log(beforeNot + "good" + afterBad);

} else {
    console.log(sentence);
}
// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...