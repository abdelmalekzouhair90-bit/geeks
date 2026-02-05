// ===== Exercise 1

let allBoldItems = [];



function getBoldItems() {
  // On sélectionne le paragraphe (on utilise un id pour être précis)
  const paragraph = document.getElementById('specialParagraph');
  
  if (!paragraph) {
    console.error("Le paragraphe avec l'id 'specialParagraph' n'existe pas");
    return;
  }
  
  // On récupère tous les <strong> à l'intérieur de ce paragraphe
  allBoldItems = paragraph.querySelectorAll('strong');
  
  console.log("Éléments en gras trouvés :", allBoldItems.length);
}



function highlight() {
  allBoldItems.forEach(item => {
    item.style.color = 'blue';
    // Optionnel : un peu plus visible
    // item.style.fontWeight = '900';
  });
}


// Fonction qui remet la couleur par défaut (noir)
function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = 'black';
    // Si tu avais changé le font-weight, tu peux le remettre
    // item.style.fontWeight = 'bold';
  });
}


//  Initialisation + écouteurs d'événements
// On appelle getBoldItems() une seule fois au chargement
getBoldItems();

// On sélectionne le paragraphe
const paragraph = document.getElementById('specialParagraph');

// On ajoute les écouteurs mouseover et mouseout
if (paragraph) {
  paragraph.addEventListener('mouseover', highlight);
  paragraph.addEventListener('mouseout', returnItemsToDefault);
} else {
  console.error("Impossible d'ajouter les écouteurs : paragraphe introuvable");
}
// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...