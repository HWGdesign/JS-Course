const btn = document.createElement("button");
const btnText = (btn.textContent = "Click");
const btnAddHTML = document.body.appendChild(btn);
btn.style.margin = "1rem";

const btn2 = document.createElement("button");
const btnText2 = (btn2.textContent = "Clear");
const btnAddHTML2 = document.body.appendChild(btn2);
btn2.style.margin = "1rem";

let font = 10;
let size = 0;

const ul = document.createElement("ul");
const ulHTML = document.body.appendChild(ul);

btn.addEventListener("click", function () {
  for (let i = 0; 0 >= i; i++) {
    for (let i = 0; i < 10; i++) {
      const li = document.createElement("li");
      li.style.fontSize = `${font++}px`;
      const ulList = ul.appendChild(li);
      const liText = (li.textContent = `element font ${size++}`);
    }
  }
});

btn2.addEventListener("click", function () {
  for (let i = 0; 0 >= i; i++) {
    ul.textContent = "";
    size = 0;
    font = 10;
  }
});
