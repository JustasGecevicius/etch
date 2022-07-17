const griddiv = document.createElement("div");
const body = document.querySelector("body");
const backgroundColor = document.querySelector(".canvascolor");
griddiv.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
griddiv.style.gridTemplateRows = `repeat(${16}, 1fr)`;
griddiv.style.gap = "2px";
griddiv.style.backgroundColor = "white";
griddiv.className = "griddiv";
griddiv.style.borderRadius = "9px";

body.appendChild(griddiv);
const slide = document.querySelector(".slider");

let click = 1;

function changeColor() {
  const color = document.querySelector(".gridcolor");
  return color.value;
}

const clickCheck = function () {
  if (click == 1) {
    removeListeners();
  } else {
    returnListeners();
  }
};

const colorChanger = function (e) {
  e.target.style.backgroundColor = changeColor();
};

function removeListeners() {
  let divs = document.querySelectorAll(".div");
  divs.forEach((elem) => {
    elem.removeEventListener("mouseover", colorChanger);
  });
  click = 0;
  console.log("removed");
}
function returnListeners() {
  let divs = document.querySelectorAll(".div");
  divs.forEach((elem) => {
    elem.addEventListener("mouseover", colorChanger);
  });
  click = 1;
  console.log("added");
}

function resetGrid() {
  //the function that is added to the event listener at the bottom 
  const create = function () {
    //removing the event listener so there are no more extra unclicks
    slide.removeEventListener("mouseup", create);
    let userInput = slide.value;

    setGaps(userInput);
    //first we need to delete the old grid pixels
    deleteOldGrid();
    //create a new grid
      //setting the new grid size
    setGridSize(userInput);
      //creating the new individual grid peaces
    createNewGrid(userInput);
  };
  //the event listener that changes the size size of the grid when 
  //the user releases their mouse
  slide.addEventListener("mouseup", create);
}

//listening for clicks on the canvas element (main div)
griddiv.addEventListener("click", clickCheck);

function changeBackground()
{  
  let color = backgroundColor.value;
  griddiv.style.backgroundColor = color;
}

function setGaps(gridSize)
{
  if (gridSize <= 5){griddiv.style.gap = "5px";}
  else if(gridSize > 5 && gridSize <= 10){
    griddiv.style.gap = "4px";
  } 
  else if(gridSize > 10 && gridSize <= 15){griddiv.style.gap = "3px";}
  else if(gridSize > 15 && gridSize <= 20){griddiv.style.gap = "2px";}
  else if(gridSize > 20){griddiv.style.gap = "1px";}
}

function deleteOldGrid()
{
  const divs = document.querySelectorAll(".div");
  divs.forEach((elem) => {
    elem.remove();
  });
}
function setGridSize(gridSize)
{
  griddiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  griddiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}
function createNewGrid(gridSize)
{
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let create = document.createElement("div");
      create.className = `div`;
      create.style.gridArea = `${j + 1},${i + 1},${j + 1},${i + 1}`;
      create.addEventListener("mouseover", colorChanger);
      griddiv.appendChild(create);
    }
  }
}

//creating the initial canvas when the website loads.
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let create = document.createElement("div");
    create.className = `div`;
    create.style.gridArea = `${j + 1},${i + 1},${j + 1},${i + 1}`;

    create.addEventListener("mouseover", colorChanger);
    griddiv.appendChild(create);
  }
}