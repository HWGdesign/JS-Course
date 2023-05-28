const buttonJS = document.querySelector(".button");
let number = 1;

const addElements = function (element) {
  const newElement = document.createElement("div");

  if (number % 3 == 0) {
    newElement.classList.add("circle");
  } else {
    newElement.classList.add("square");
  }

  const addTextToElement = (newElement.textContent = number);
  number++;
  const addNewElementToHTML = document
    .getElementById("Elements")
    .appendChild(newElement);
};

buttonJS.addEventListener("click", addElements);
