const buttonJS = document.getElementById("buttonJS");
let number = 1;

const addElement = function () {
  const ul = document.getElementById("numbersArea");
  const li = document.createElement("li");
  const addLi = ul.appendChild(li);
  li.textContent = number;
  if (number % 3 == 0) {
    li.classList.add("bold");
  }
  number = number + 2;
};

buttonJS.addEventListener("click", addElement);
