const div = document.createElement("div");
const addClass = div.classList.add("line");
document.body.appendChild(div);
div.style.backgroundColor = "red";
let size = 20;
let growRect = true;
div.style.height = size + `px`;
div.style.width = 100 + `%`;

const scroll = window.addEventListener("scroll", function () {
  if (size > this.window.innerHeight / 2) {
    growRect = !growRect;
  } else if (size <= 0) {
    growRect = !growRect;
  }

  if (growRect) {
    size += 10;
    div.style.backgroundColor = "green";
  } else {
    size -= 10;
    div.style.backgroundColor = "red";
  }
  div.style.height = size + `px`;
});
