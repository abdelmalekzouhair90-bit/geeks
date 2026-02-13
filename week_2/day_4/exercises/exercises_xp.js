// ======= Exercise 1


/* <!DOCTYPE html>
<html>
<head>
  <title>Contact Form</title>
</head>
<body>

<form method="GET" action="">
  <input type="text" name="username" placeholder="Your name">
  <br><br>
  <textarea name="message" placeholder="Your message"></textarea>
  <br><br>
  <input type="submit" value="Send">
</form>

</body>
</html> 


========= Where will the sent data appear? ======

So, The data appears in the address bar (URL). In our case, it will appear as:

http://localhost/index.html?username=Ali&message=hello

This is because the GET method keeps the data visible in the URL as query parameters. */


// ======= Exercise 2:


/* When the form is submitted using the *POST* method, the sent data **does not appear in the URL**.

Instead, the data appears in the *request body*.
You can see it by opening the *Network tab* in the browser’s Developer Tools, selecting the request, and checking the **Payload / Form Data** section.

The POST method sends data inside the HTTP request body, which makes it hidden from the address bar and more suitable for sensitive or large amounts of data. */


// ======= Exercise 3:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}


const jsonMarioGame = JSON.stringify(marioGame);
console.log(jsonMarioGame); 


const prettyJsonMarioGame = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonMarioGame); 


const parsedMarioGame = JSON.parse(prettyJsonMarioGame);
console.log(parsedMarioGame.characters.mario.speed); 

