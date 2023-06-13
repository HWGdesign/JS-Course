const input = document.querySelector("input");
const ul = document.querySelector(".list");
const li = document.querySelectorAll(".list li");

const enterKey = (e) => {
  if (e.key == "Enter") {
    console.log("Enter clicked");

    let tasks = [...li];
    tasks = tasks.filter((li) =>
      li.textContent.toLowerCase().includes(input.value)
    );
    console.log(tasks);
    input.value = "";
    ul.textContent = "";
    tasks.forEach((li) => ul.appendChild(li));
  }
};

input.addEventListener("keydown", enterKey);
