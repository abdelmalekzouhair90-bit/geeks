const toolbar = document.getElementById("toolbar");
const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clear");

let currentColor = "black";
let mouseDown = false;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


const palette = [
 "red","orange","gold","yellow","yellowgreen","lightgreen","green",
  "turquoise","cyan","lightblue","dodgerblue","blue","navy","purple",
  "darkviolet","violet","pink","rgb(146,112,117)","grey","black",
  "rgb(0,255,0)","rgb(110,33,46)","rgba(137,165,108,0.8)",
  "rgb(41,153,82)","rgb(172,75,75)","salmon","coral","khaki",
  "lime","teal","steelblue","indigo","magenta","orchid",
  "maroon","beige","tomato","peru","lavender"
];

palette.forEach(color=>{
  const btn = document.createElement("button");
  btn.classList.add("color");
  btn.style.background = color;

  btn.addEventListener("click",()=>{
    currentColor = color;
  });

  toolbar.insertBefore(btn, clearBtn);
});


function createGrid(size){
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(let i=0;i<size*size;i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mousedown",()=>{
      square.style.background = currentColor;
    });

    square.addEventListener("mouseover",()=>{
      if(mouseDown) square.style.background = currentColor;
    });

    grid.appendChild(square);
  }
}

clearBtn.addEventListener("click",()=>createGrid(40));

createGrid(40);