const input = document.querySelector("#password");
const div = document.querySelector(".message");
const passwords = ["user", "hwg"];
const messages = ["Correct password - User", "Correct password - HWG"];

input.addEventListener("input", (e) => {
  const text = e.target.value;
  const textLowerCase = text.toLowerCase();

  document.querySelector(".message").textContent = ""; //clear

  //password - text, array content etc..., index - add number value
  document.addEventListener("keydown", (click) => {
    if (click.key == "Enter") {
      passwords.forEach((password, index) => {
        //Example 1 (better)
        document.querySelector(".message").classList.remove("correct");
        document.querySelector(".message").classList.add("wrong");
        if (passwords[index - 1] == textLowerCase) {
          document.querySelector(".message").textContent = messages[index - 1];
          document.querySelector(".message").classList.remove("wrong");
          document.querySelector(".message").classList.add("correct");
          e.target.value = "";
          //Example 2
        } else if (passwords[index] == textLowerCase) {
          document.querySelector(".message").textContent = messages[index];
          document.querySelector(".message").classList.remove("wrong");
          document.querySelector(".message").classList.add("correct");
          e.target.value = "";
        } else {
          document.querySelector(".message").textContent = "Wrong password!";
          e.target.value = "";
        }
      });
    }
  });
});

// input.addEventListener("focus", (e) => {
//   e.target.classList.add("active");
// });

// input.addEventListener("blur", (e) => {
//   e.target.classList.remove("active");
// });

// input.addEventListener("focus", (e) => {
//   e.target.classList.toggle("active");
// });
// input.addEventListener("blur", (e) => {
//   e.target.classList.toggle("active");
// });

// if (password == e.target.value) {
//   div.textContent = message;
//   e.target.value = "";
// } else if (password != e.target.value) {
//   div.textContent = "";
// }
// });
