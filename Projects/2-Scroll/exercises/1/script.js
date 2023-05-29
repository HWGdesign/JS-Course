const div = document.createElement("div");
const addWidth = (div.style.width = "100%");
const addColor = (div.style.backgroundColor = "green");
let size = 20;
const addHeight = (div.style.height = `${size}px`);
const addToHTML = document.body.appendChild(div);
let condition = true;
document.addEventListener("scroll", function () {
  if (size > window.innerHeight / 1.5) {
    condition = !condition;
  } else if (size <= 0) {
    condition = !condition;
  }

  if (condition) {
    size += 10;
    div.style.backgroundColor = "yellow";
  } else {
    size -= 10;
    div.style.backgroundColor = "red";
  }
  div.style.height = `${size}px`;
});
