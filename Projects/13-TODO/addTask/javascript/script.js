const input = document.querySelector(".inputJS");
const add = document.querySelector(".addJS");
const reset = document.querySelector(".resetJS");
const tasks = document.querySelector(".tasks");
const task = document.querySelectorAll("task");
const taskIndex = document.querySelector(".index");
const errors = document.querySelector(".error");

const toDoList = [];
let index = 0;

const delItem = (e) => {
  --index;
  e.target.parentNode.remove();
  const number = e.target.parentNode.dataset.number;
  console.log(number);
  toDoList.splice(number, 1);
  console.log(toDoList);

  taskIndex.textContent = index;
  input.value = "";
};

const addItem = () => {
  if (input.value != "") {
    if (toDoList.includes(input.value)) {
      alert("Task already exists");
      return;
    } else {
      toDoList.push(input.value);
      console.log(toDoList);
      const li = document.createElement("li");
      li.innerHTML = toDoList[index] + `<button>  X </button>`;

      toDoList.forEach(() => {
        tasks.appendChild(li);
      });

      li.querySelector("button").addEventListener("click", delItem);
      li.dataset.number = index;
      tasks.appendChild(li);
      index++;
      //add index
      taskIndex.textContent = index;
      input.value = "";
    }
  }
  //Add item to toDoList
};

const resetItems = () => {
  //reset toDoList []
  toDoList.length = 0;
  console.log(toDoList);
  //reset tasks
  tasks.textContent = "";
  //reset index
  index = 0;
  taskIndex.textContent = index;
  input.value = "";
};

add.addEventListener("click", addItem);
reset.addEventListener("click", resetItems);
