const btn = document.querySelector(".button-js");
const names = [];

const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector(".input-js");
  const newName = input.value;
  if (newName != 0) {
    for (name of names) {
      if (name === newName) {
        alert(`can't add same name`);
        input.value = "";
        return;
      }
    }

    names.push(newName);
    const ul = document.querySelector(".namesList-js");
    const li = document.createElement("li");
    li.textContent = newName;
    ul.appendChild(li);
    input.value = "";
  }
  console.log(names);
};

const add = btn.addEventListener("click", addName);
