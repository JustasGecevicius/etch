let griddiv = document.createElement("div");
let body = document.querySelector("body");
//console.log(body);
body.appendChild(griddiv);

for(let i = 0; i < 16; i++)
{
    for(let j = 0; j < 16; j++)
    {
        let create = document.createElement("div");
        create.className = `${i} ${j}`;
        create.style.gridColumn = `${i + 1}/${i + 1}`;
        create.style.gridRow = `${j + 1}/${j + 1}`;
        create.addEventListener("mouseover", function hello(e) {this.classList.add("color"); console.log(e)})
        griddiv.appendChild(create);
    }   

}
function color(e)
{
    console.log(this);}
