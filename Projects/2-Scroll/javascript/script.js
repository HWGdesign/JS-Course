const square = document.createElement("div");
const addClass = square.classList.add("square");
const addSquare = document.body.appendChild(square); //Where and what
const selectSquare = document.querySelector(".square");
let size = 50;
let heightStyle = (square.style.height = `${size}px`);
let widthStyle = (square.style.width = `${size}px`);

//FLAG
let grow = true;

const ListenScroll = window.addEventListener("scroll", function () {
  if (size >= this.window.innerWidth / 2) {
    grow = !grow;
  } else if (size <= 0) {
    grow = !grow;
  }

  if (grow) {
    size += 5;
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
  } else {
    size -= 5;
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
  }
});
