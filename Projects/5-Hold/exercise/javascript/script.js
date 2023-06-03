let red = 150;
let green = 150;
let blue = 150;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.classList.add("center");
h1.textContent = `rgb(${red}, ${green}, ${blue})`;
h1.style.fontSize = "1rem";
const changeBgColor = (e) => {
  // console.log(e.keyCode, e.which);
  //38 - MouseUp
  //40 - MouseDown

  //IF
  // if (e.keyCode == 38 && red < 255) {
  //   red += 5;
  //   green += 5;
  //   blue += 5;
  //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // } else if (e.keyCode == 40 && red >= 0) {
  //   red -= 5;
  //   green -= 5;
  //   blue -= 5;
  //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // }

  //SWITCH
  switch (e.keyCode) {
    case 38:
      console.log("mouseUp");
      document.body.style.backgroundColor = `rgb(${
        red < 255 ? (red += 5) : red
      }, ${green < 255 ? (green += 5) : green}, ${
        blue < 255 ? (blue += 5) : blue
      })`;
      break;
    case 40:
      console.log("MouseDown");
      document.body.style.backgroundColor = `rgb(${
        red >= 0 ? (red -= 5) : red
      }, ${green >= 0 ? (green -= 5) : red}, ${
        blue >= 0 ? (blue -= 5) : blue
      })`;
  }
  if (red <= 65) {
    h1.style.color = "white";
  } else if (red >= 70) {
    h1.style.color = "black";
  }
  h1.textContent = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener("keydown", changeBgColor);
