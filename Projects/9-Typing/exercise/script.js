const textSpan = document.querySelector(".text");
const cursorSpan = document.querySelector(".cursor");

const greetings = [`Hello!`, `What's up?`, `How are You?`, `Great to see You!`];

textSpan.textContent = "";

let wordIndex = 0;
let letterIndex = 0;

const cursorTic = () => {
  cursorSpan.classList.toggle("active");
};

const wordChangeInterval = () => {
  letterIndex();
};

const letterShowInterval = () => {
  textSpan.textContent += greetings[wordIndex][letterIndex++];
  if (letterIndex == greetings[wordIndex].length + 1) {
    console.log(`word ${wordIndex + 1} finished`);
    textSpan.textContent = "";
    letterIndex = 0;
    wordIndex++;
    if (wordIndex == greetings.length) {
      clearInterval(letterShow);
      clearInterval(cursorOpacity);
    }
  }
};

const letterShow = setInterval(letterShowInterval, 150);
const cursorOpacity = setInterval(cursorTic, 100);
