document.body.style.margin = 0;
document.body.style.height = `100vh`;

const mouseClick = window.addEventListener("click", (click) => {
  const width = click.clientX;
  const height = click.clientY;

  if (width % 2 == 0 && height % 2 == 0) {
    document.body.style.backgroundColor = "red";
  } else if (width % 2 == 0 && height % 2 != 0) {
    document.body.style.backgroundColor = "green";
  } else if (width % 2 == !0 && height % 2 == 0) {
    document.body.style.backgroundColor = "yellow";
  } else if (width % 2 != 0 && height % 2 != 0) {
    document.body.style.backgroundColor = "purple";
  }

  console.log(width, height);
});
