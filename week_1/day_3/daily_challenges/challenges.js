// ====== Daily Challenge 1
// script.js

// 1. Sélection des éléments
const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const libButton = document.getElementById('lib-button');

// On va ajouter le bouton shuffle dynamiquement (bonus)
let shuffleButton = null;

// Liste de plusieurs histoires (pour le bonus shuffle)
const stories = [
  "Once upon a time, a {adjective} {noun} named {person} decided to {verb} all the way to {place}. Everyone laughed!",
  "{person} was known in {place} as the most {adjective} {noun} ever. One day they started to {verb} and chaos began...",
  "In the middle of {place}, {person} found a very {adjective} {noun}. Without thinking, they began to {verb} it wildly!",
  "When {person} arrived at {place}, they saw a {adjective} {noun} that looked very hungry. So they decided to {verb} it.",
  "The legend says that in {place} lives a {adjective} {noun} called {person}. Every full moon, it starts to {verb}!"
];

// Fonction qui génère une histoire aléatoire avec les mots fournis
function generateStory(noun, adjective, person, verb, place) {
  // Choisir une histoire au hasard
  const randomIndex = Math.floor(Math.random() * stories.length);
  let storyTemplate = stories[randomIndex];

  // Remplacer les placeholders
  storyTemplate = storyTemplate
    .replace('{noun}', noun)
    .replace('{adjective}', adjective)
    .replace('{person}', person)
    .replace('{verb}', verb)
    .replace('{place}', place);

  return storyTemplate;
}

// Fonction principale lors du submit
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Récupérer les valeurs
  const noun = document.getElementById('noun').value.trim();
  const adjective = document.getElementById('adjective').value.trim();
  const person = document.getElementById('person').value.trim();
  const verb = document.getElementById('verb').value.trim();
  const place = document.getElementById('place').value.trim();

  // Vérifier qu'aucun champ n'est vide
  if (!noun || !adjective || !person || !verb || !place) {
    alert('Please fill in all fields!');
    storySpan.textContent = '';
    return;
  }

  // Générer et afficher l'histoire
  const storyText = generateStory(noun, adjective, person, verb, place);
  storySpan.textContent = storyText;

  // Créer le bouton shuffle s'il n'existe pas encore (bonus)
  if (!shuffleButton) {
    shuffleButton = document.createElement('button');
    shuffleButton.textContent = 'Shuffle Story';
    shuffleButton.style.marginLeft = '15px';
    shuffleButton.style.padding = '8px 16px';
    shuffleButton.style.backgroundColor = '#ff6b6b';
    shuffleButton.style.color = 'white';
    shuffleButton.style.border = 'none';
    shuffleButton.style.borderRadius = '5px';
    shuffleButton.style.cursor = 'pointer';

    // Ajouter le bouton juste après le bouton Lib it!
    libButton.parentNode.insertBefore(shuffleButton, libButton.nextSibling);

    // Événement shuffle
    shuffleButton.addEventListener('click', function() {
      const newStory = generateStory(noun, adjective, person, verb, place);
      storySpan.textContent = newStory;
    });
  }
});

// ====== Daily Challenge 2

// ====== Daily Challenge 3
