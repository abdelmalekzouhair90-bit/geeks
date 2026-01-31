// ====== Daily Challenge 1

const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 4 }, // Simplified moon count
    { name: "Saturn", color: "gold", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "darkblue", moons: 1 }
];

// Select the <section> element
const listPlanets = document.querySelector(".listPlanets");

planets.forEach((planet) => {
    

    const planetDiv = document.createElement("div");
    
 
    planetDiv.classList.add("planet");
    

    planetDiv.style.backgroundColor = planet.color;
    
    planetDiv.textContent = planet.name;
    planetDiv.style.color = "white"; 

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        
        // Add the "moon" class for styling
        moonDiv.classList.add("moon");
        
    
        moonDiv.style.left = (120 + (i * 35)) + "px"; 
        
        planetDiv.appendChild(moonDiv);
    }

    // append the completed planet (with its moons) to the section
    listPlanets.appendChild(planetDiv);
});
// ====== Daily Challenge 2

// ====== Daily Challenge 3
