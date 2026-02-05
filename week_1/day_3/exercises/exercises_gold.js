// ===== Exercise 1

// ===== Exercise 2
const form = document.querySelector('form');
console.log('Le formulaire :', form);

// Alternative : document.getElementById('userForm') si on lui donne un id
// const form = document.getElementById('userForm');


// 4. Récupérer les inputs par leur id
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');

console.log('Input prénom (par id) :', firstNameInput);
console.log('Input nom (par id) :', lastNameInput);


// 5. Récupérer les inputs par leur attribut name
const inputsByName = document.querySelectorAll('input[name]');
console.log('Tous les inputs ayant un attribut name :', inputsByName);

// Ou plus précisément :
const firstNameByName = document.querySelector('input[name="firstname"]');
const lastNameByName = document.querySelector('input[name="lastname"]');
console.log('Input firstname (par name) :', firstNameByName);
console.log('Input lastname (par name) :', lastNameByName);


// 6. Écouter l'événement submit sur le formulaire
form.addEventListener('submit', function(event) {
  
  // →→→→ Très important : empêcher le rechargement de la page
  event.preventDefault();
  // Pourquoi preventDefault() ?
  // Par défaut, un formulaire <form> sans action envoie les données vers le serveur
  // et recharge la page (comportement classique HTML).
  // Ici on veut gérer les données en JavaScript → on bloque ce comportement.

  
  // Récupérer les valeurs saisies
  const firstName = firstNameInput.value.trim();   // .trim() enlève les espaces inutiles
  const lastName = lastNameInput.value.trim();

  
  // Vérifier que les champs ne sont pas vides
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

  // Optionnel : focus sur le premier champ pour une meilleure UX
  firstNameInput.focus();
}); 
// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...