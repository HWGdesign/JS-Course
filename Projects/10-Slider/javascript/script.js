const slides = [
  {
    img: "img/img1.jpg",
    text: "Page 1",
  },
  {
    img: "img/img2.jpg",
    text: "Page 2",
  },
  {
    img: "img/img3.jpg",
    text: "Page 3",
  },
];

//Interface
const time = 3000;
let active = 0;

const img = document.querySelector(".slider");
const h1 = document.querySelector(".text");
const dots = [...document.querySelectorAll(".dots span")];
//Implement

//Change dot
const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

//Change Img
const changeSlide = () => {
  active++;
  if (active === slides.length) {
    console.log("full loop");
    active = 0;
  }
  img.src = slides[active].img;
  h1.textContent = slides[active].text;
  changeDot();
};
//we using let, because we overwrite it on keyChangeSlide() for clear and set Interval again and again
let slider = setInterval(changeSlide, time);

//Left Right arrow
const keyChangeSlide = (e) => {
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(slider);
    e.keyCode == 37 ? active-- : active++;
  }
  if (active === slides.length) {
    active = 0;
  } else if (active < 0) {
    active = slides.length - 1;
  }
  img.src = slides[active].img;
  h1.textContent = slides[active].text;
  changeDot();
  //We need to assign slider to the clearInterval(slider) on top if we wanna reuse it again!
  slider = setInterval(changeSlide, time);
};
const key = document.addEventListener("keydown", keyChangeSlide);
