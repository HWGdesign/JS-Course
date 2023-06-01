const h1 = document.createElement("h1");
const addHTML = document.body.appendChild(h1);
const h1Black = (h1.style.color = "black");
const h1Class = h1.classList.add("center");
const content = (h1.textContent = "Move mouse");

document.addEventListener("mousemove", (move) => {
  const x = move.clientX;
  const y = move.clientY;

  h1.textContent = `${x}, ${y}`;

  const width = innerWidth;
  const height = innerHeight;

  const red = (x / width) * 100;
  const green = (x / height) * 100;
  const blue = (y / width) * 100;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
});
