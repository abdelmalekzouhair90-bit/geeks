// ====== Daily Challenge 1


const sentence = "This dinner is not that bad ! You cook well";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");


if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  const result =
    sentence.slice(0, wordNot) +
    "good" +
    sentence.slice(wordBad + 3);

  console.log(result);
} else {
  console.log(sentence);
}

// ====== Daily Challenge 2
 for (let i = 1; i <= 6; i++) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += "* ";
  }

  console.log(line);
}

// ====== Daily Challenge 3
