const input = document.querySelector("#password");
const div = document.querySelector(".message");
const password = "user";

const message = "Test Message";
const error = "Error";

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  if (password == e.target.value) {
    div.textContent = message;
    e.target.value = "";
  } else if (password != e.target.value) {
    div.textContent = "";
  }
});

// input.addEventListener("focus", (e) => {
//   e.target.classList.add("active");
// });

// input.addEventListener("blur", (e) => {
//   e.target.classList.remove("active");
// });

input.addEventListener("focus", (e) => {
  e.target.classList.toggle("active");
});
input.addEventListener("blur", (e) => {
  e.target.classList.toggle("active");
});
