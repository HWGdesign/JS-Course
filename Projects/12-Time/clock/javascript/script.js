const time = () => {
  const timeSpan = document.querySelector(".timeSpan");
  const time = new Date();
  const hours = time.getHours() < 10 ? `0` + time.getHours() : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? `0` + time.getMinutes() : time.getMinutes();
  const seconds =
    time.getSeconds() < 10 ? `0` + time.getSeconds() : time.getSeconds();

  timeSpan.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(time, 1000);
