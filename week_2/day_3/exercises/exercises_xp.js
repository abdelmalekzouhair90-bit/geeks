// ==== log it to the console= Exercise 1

const h1 = document.querySelector('h1');
console.log('h1 element:', h1);
console.log('h1 text content:', h1.textContent);

// 2. Remove the last paragraph inside the <article> element
const article = document.querySelector('article');
const allParagraphs = article.querySelectorAll('p');
const lastParagraph = allParagraphs[allParagraphs.length - 1];

if (lastParagraph) {
  lastParagraph.remove();
  console.log('Last paragraph removed successfully');
}

// 3. Change the background color of h2 to red when clicked
const h2 = document.querySelector('h2');
h2.addEventListener('click', function () {
  h2.style.backgroundColor = 'red';
  h2.style.color = 'white';     
  h2.style.padding = '5px 10px';    
  h2.style.borderRadius = '4px';
});


const h3 = document.querySelector('h3');
h3.addEventListener('click', function () {
  h3.style.display = 'none';
  console.log('h3 element has been hidden');
});


const boldButton = document.getElementById('boldButton');  

boldButton.addEventListener('click', function () {
  const paragraphs = document.querySelectorAll('article p');
  
  paragraphs.forEach(paragraph => {
    paragraph.style.fontWeight = 'bold';
  });
  
  console.log('All paragraphs are now bold');
});

// ────────────────────────────────────────────────
// Change h1 font size to a random value (0–100px) on mouse hover
h1.addEventListener('mouseenter', function () {
  const randomSize = Math.floor(Math.random() * 101); 
  h1.style.fontSize = randomSize + 'px';
  console.log('New random font size for h1:', randomSize + 'px');
});

// Optional: Reset font size when mouse leaves (returns to default)
h1.addEventListener('mouseleave', function () {
  h1.style.fontSize = ''; // Removes inline style → falls back to CSS default
});

// Fade out the second paragraph when hovered
const paragraphs = document.querySelectorAll('article p');
const secondParagraph = paragraphs[1]; // Second paragraph (index 1)

if (secondParagraph) {
  secondParagraph.addEventListener('mouseenter', function () {
    secondParagraph.classList.add('fade-out');
  });
}
// ===== Exercise 2



// Récupérer le formulaire et l'afficher dans la console
const form = document.querySelector('form');
console.log('Le formulaire :', form);


const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');

console.log('Input prénom (par id) :', firstNameInput);
console.log('Input nom (par id) :', lastNameInput);

const inputsByName = document.querySelectorAll('input[name]');
console.log('Tous les inputs ayant un attribut name :', inputsByName);

// Ou plus précisément :
const firstNameByName = document.querySelector('input[name="firstname"]');
const lastNameByName = document.querySelector('input[name="lastname"]');
console.log('Input firstname (par name) :', firstNameByName);
console.log('Input lastname (par name) :', lastNameByName);


//  Écouter l'événement submit sur le formulaire
form.addEventListener('submit', function(event) {
  
  // →→→→ Très important : empêcher le rechargement de la page
  event.preventDefault();

  const firstName = firstNameInput.value.trim();   // .trim() enlève les espaces inutiles
  const lastName = lastNameInput.value.trim();

  
 
  if (firstName === '' || lastName === '') {
    alert('Veuillez remplir les deux champs !');
    return; // on arrête l'exécution
  }

  
  // Créer les éléments <li>
  const liFirst = document.createElement('li');
  liFirst.textContent = firstName;

  const liLast = document.createElement('li');
  liLast.textContent = lastName;

  
  // Trouver la liste <ul> et y ajouter les <li>
  const usersList = document.querySelector('.usersAnswer');
  usersList.appendChild(liFirst);
  usersList.appendChild(liLast);

  
  // Optionnel : vider les champs après ajout
  firstNameInput.value = '';
  lastNameInput.value = '';


  firstNameInput.focus();
});
// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...