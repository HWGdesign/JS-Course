const startBtn = document.querySelector(".startBtn");
const resetBtn = document.querySelector(".resetBtn");
const timeSpan = document.querySelector(".timeSpan");

let idInterval;
let time = 0;

const addTime = () => {
  time++;
  timeSpan.textContent = (time / 100).toFixed(2);
};

startCount = () => {
  if (startBtn.textContent == "Start") {
    startBtn.textContent = "Stop";
    // timeSpan.textContent = "start counting";
    idInterval = setInterval(addTime, 10);
  } else if (startBtn.textContent == "Stop") {
    startBtn.textContent = "Start";
    // timeSpan.textContent = "stop counting";
    clearInterval(idInterval);
  }
};

resetCount = () => {
  timeSpan.textContent = "- - -";
  time = 0;
  clearInterval(idInterval);
  startBtn.textContent = "Start";
};

startBtn.addEventListener("click", startCount);
resetBtn.addEventListener("click", resetCount);
