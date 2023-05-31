let font = 10;
const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");

const click = btn.addEventListener("click", () => {
  liItems.forEach((liItem) => {
    liItem.style.display = "block";
    liItem.style.fontSize = font + "px";
  });
  font++;
});
