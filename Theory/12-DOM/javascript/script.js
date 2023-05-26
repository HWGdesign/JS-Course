//! DOM
//FIND AND DOWNLOAD ELEMENT
console.log(document);

console.log(document.getElementById("tagID"));
console.log(document.querySelector(".tagClass"));
console.log(document.querySelector("ol"));
console.log(document.getElementsByClassName("second"));

const liList = document.querySelectorAll("li");

const liArray = [...liList];
const liArray2 = Array.from(liList);

console.log(liArray);
console.log(liArray2);

const h1Info = document.querySelector("h1");
console.log(h1Info.getAttribute("class")); //Check class

const h1Text = h1Info.textContent; //it storage text
console.log(h1Text);

const bodyInnerHTML = document.body.innerHTML; //it storage all tags
console.log(bodyInnerHTML);

const secondLi = document.querySelector("li:nth-child(2)");
console.log(secondLi);

// ! CHANGE ELEMENT

const firstLi = document.querySelector("li:nth-child(1)");
firstLi.textContent = "ID 1: Changed text with JS";
secondLi.innerHTML = "<b>ID 2: Changed text with JS</b>";
console.log(firstLi);

const thirdLI = document.querySelector("li:nth-child(3)");

thirdLI.setAttribute("title", "Click me!");

//SET ATTRIBUTE WITH LOOP

//1. for loop
for (let i = 0; i < liList.length; i++) {
  liList[i].style.fontSize = "1.1rem";
}

//2. forEach
liList.forEach(function (liItem) {
  liItem.classList.add("newColor");
});

//This is fantastic :)
//Toggle can add a class if an element doesn't have one, but also remove it if it does !!
function addToggle() {
  thirdLI.classList.toggle("click");
}

// LISTENING

//1.
const showScroll = function () {
  console.log("scroll-time!");
};
window.addEventListener("scroll", showScroll);

//2.
const doubleClick = function () {
  console.log("double-click time!");
};
window.addEventListener("dblclick", doubleClick);

//3.
const addSign = function () {
  this.textContent += "!";
};

const h1Element = document.querySelector("p");

h1Element.addEventListener("click", addSign);

//4.

//We define what we wanna to do?
const addRed = function () {
  this.innerHTML = "I love JS!";
};

//We look for all LI
const items = document.querySelectorAll("li");

//We looking threw every one and listening for click, if we click we taking action
items.forEach((item) => {
  item.addEventListener("click", addRed);
});

// CREATE ELEMENT

const addLi = function () {
  const liElement = document.createElement("li");
  liElement.textContent = "Added with JS";
  liElement.style.backgroundColor = "Yellow";
  document.querySelector("ol").appendChild(liElement);
};
