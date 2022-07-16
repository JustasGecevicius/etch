let griddiv = document.createElement("div");
let body = document.querySelector("body");
let click = 1;
body.appendChild(griddiv);
const userInput = parseInt(prompt("enter the size of the square"))
let bdiv = document.querySelector("div");
bdiv.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
bdiv.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;


const clickCheck = function (){
    if (click == 1) {
        removeListeners();
      } else {
        returnListeners();
      }
}

const colorChanger = function (e) {
  e.target.classList.add("color");
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

window.addEventListener("click", clickCheck);

for (let i = 0; i < userInput; i++) {
    for (let j = 0; j < userInput; j++) {
      let create = document.createElement("div");
      create.className = `div`;
      create.style.gridArea = `${j + 1},${i + 1},${j + 1},${i + 1}`;
      create.addEventListener("mouseover", colorChanger);
      griddiv.appendChild(create);
    }
  }
