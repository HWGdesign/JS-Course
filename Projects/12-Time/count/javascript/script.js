const spanDays = document.querySelector(".days");
const spanHours = document.querySelector(".hrs");
const spanMinutes = document.querySelector(".min");
const spanSeconds = document.querySelector(".sec");

setInterval(() => {
  const timeSpan = document.querySelector(".timeSpan");
  const nowTime = new Date();
  const endTime = new Date(`2030-01-01 00:00:01`);
  const time = endTime - nowTime;
  let days = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );
  days = days < 10 ? `0` + days : days;

  let hours = Math.floor(
    (endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
  );
  hours = hours < 10 ? `0` + hours : hours;

  let minutes = Math.floor(
    (endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
  );
  minutes = minutes < 10 ? `0` + minutes : minutes;

  let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
  seconds = seconds < 10 ? `0` + seconds : seconds;

  spanDays.textContent = `${days} `;
  spanHours.textContent = `${hours} `;
  spanMinutes.textContent = `${minutes} `;
  spanSeconds.textContent = `${seconds} `;
}, 1000);
