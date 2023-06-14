const input = document.querySelector(".inputJS");
const btnAdd = document.querySelector(".addJS");
const btnRes = document.querySelector(".resJS");
const tasks = document.querySelector(".taskList");
const counter = document.querySelector(".count");
const btnDel = document.querySelector(".delete");
let index = 0;

let taskArr = [];

const addTask = () => {
  if (input.value != "") {
    if (input.value != taskArr[index]) {
      const li = document.createElement("li");
      li.innerHTML = taskArr[index];
      tasks.appendChild(li);

      li.className = "task";
      li.innerHTML = input.value + `<button>Del</button>`;

      taskArr.push(input.value);

      counter.textContent = ` ${index}`;
      console.log(taskArr);

      input.value = "";
      index++;
    } else {
      return;
    }
  }
};

const resTask = () => {
  input.value = "";
  taskArr = [];
  tasks.textContent = "";
  index = 0;
  console.log(taskArr);
};

btnAdd.addEventListener("click", addTask);
btnRes.addEventListener("click", resTask);
