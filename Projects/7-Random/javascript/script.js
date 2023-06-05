const btn = document.querySelector(".addRandomName");

const names = [
  "Jacob",
  "Sara",
  "Eddie",
  "Joel",
  "Kim",
  "Jamie",
  "Jake",
  "Samantha",
];
const sentence = ["in my opinion", "i think", "for me", "without a doubt"];

function nameGenerator() {
  const div = document.querySelector(".RandomName");

  const randomName = Math.floor(Math.random() * names.length);
  const randomSentence = Math.floor(Math.random() * sentence.length);

  div.textContent = `${sentence[randomSentence]} the best name for kid is ${names[randomName]}`;
}

btn.addEventListener("click", nameGenerator);
