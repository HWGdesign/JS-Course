//Add and style button
const buttonJS = document.createElement("button");
const addClass = buttonJS.classList.add("buttonJS");
const addToHTML = document.body.appendChild(buttonJS);
buttonJS.textContent = "Click me";
buttonJS.style.backgroundColor = "orange";
buttonJS.style.height = "auto";
buttonJS.style.width = "auto";
buttonJS.style.padding = "1rem";
buttonJS.style.marginBottom = "1rem";
document.body.style.margin = "5rem";
buttonJS.style.color = "white";
buttonJS.style.outline = "none";
buttonJS.style.border = "none";
buttonJS.style.cursor = "pointer";

//Create Element
const ulNew = document.createElement("ul");
const addClassUL = ulNew.classList.add("ul-JS");
const noDisplay = (ulNew.style.display = "none");

//Add Elements
let number = 0;
for (let i = 0; i < 10; i++) {
  const liNew = document.createElement("li");
  const addToHTMLagain = document.body.appendChild(ulNew);
  const addLiToUl = ulNew.appendChild(liNew);
  number++;
  const LiContent = (liNew.textContent = `element ${number}`);
}
//Set Font Size
let size = 10;
document.body.style.fontSize = `${size}px`;

//Button function
const Click = document.querySelector(".buttonJS");
const AddNumbers = Click.addEventListener("click", function () {
  for (let i = 0; 0 >= i; i++) {
    size++;
    document.body.style.fontSize = `${size}px`;
    ulNew.style.display = "block";
  }
});
