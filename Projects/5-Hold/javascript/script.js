const div = document.querySelector(".square");

let number = 0;
let divX = 100;
let divY = 100;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (e) => {
  div.style.backgroundColor = "grey";
  drawActive = !drawActive;

  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
  console.log(insertDivX, insertDivY);
});

div.addEventListener("mousemove", (e) => {
  if (drawActive) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;

    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});
div.addEventListener("mouseup", (e) => {
  div.style.backgroundColor = "black";
  drawActive = !drawActive;
});
