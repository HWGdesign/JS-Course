//Navigation
const btn = document.querySelector(".btn-js");
const section = document.querySelector(".codesSpace-js");

//Data
const codesNumber = 50;
const charactersNumber = 20;

//Code Content
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "J",
  "L",
  "M",
  "N",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

//Function
const generateRandomCode = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let j = 0; j < charactersNumber; j++) {
      const lettersIndex = Math.floor(Math.random() * letters.length);
      const randomLetter = letters[lettersIndex];
      code += randomLetter;
    }
    const li = document.createElement("li");
    document.querySelector(".codesSpace-js").appendChild(li);
    li.textContent = code;
  }
};

//Listening for click
btn.addEventListener("click", generateRandomCode);
