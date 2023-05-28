const buttonJS = document.getElementById("buttonJS");
let number = 1;

function addNumber() {
  const ul = document.getElementById("numbersArea");
  const li = document.createElement("li");
  const createLi = ul.appendChild(li);
  li.textContent = number;
  if (number % 3 == 0) {
    li.classList.add("bold");
  }
  number = number + 2;
}

const click = buttonJS.addEventListener("click", addNumber);
