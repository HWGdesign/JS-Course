import Slide from './Slide.js';

export default class Slider {
  #image;
  #title;
  #dots;
  #slides;
  #indexInterval;

  constructor(slideList, imageSelector, textSelector, dotsSelector, time = 3000, active = 0) {
    this.#image = document.querySelector(imageSelector);
    this.#title = document.querySelector(textSelector);
    this.#dots = [...document.querySelectorAll(dotsSelector)];
    this.#slides = [];
    this.#indexInterval = null;

    for (const slide of slideList) {
      this.#addSlide(new Slide(slide.img, slide.txt));
    }

    console.log(this.#slides);

    this.time = time;
    this.active = active;

    window.addEventListener('keydown', (e) => this.#keyChangeSlide(e));
  }
  #addSlide(slide) {
    this.#slides.push(slide);
  }

  start() {
    this.#indexInterval = setInterval(() => this.#changeSlide(), this.time);
  }

  #changeDot() {
    const activeDot = this.#dots.findIndex((dot) => dot.classList.contains('active'));
    this.#dots[activeDot].classList.remove('active');
    this.#dots[this.active].classList.add('active');
  }

  #changeSlide() {
    this.active++;
    if (this.active === this.#slides.length) {
      this.active = 0;
    }
    this.#image.src = this.#slides[this.active].img;
    this.#title.textContent = this.#slides[this.active].txt;
    this.#changeDot();
  }

  #keyChangeSlide(e) {
    if (e.keyCode == 37 || e.keyCode == 39) {
      clearInterval(this.#indexInterval);
      e.keyCode == 37 ? this.active-- : this.active++;
    }
    if (this.active === this.#slides.length) {
      this.active = 0;
    } else if (this.active < 0) {
      this.active = this.#slides.length - 1;
    }
    this.#image.src = this.#slides[this.active].img;
    this.#title.textContent = this.#slides[this.active].txt;
    this.#changeDot();
    this.start();
  }
}

// //Interface
// const time = 3000;
// let active = 0;

// const #image = document.querySelector('.slider');
// const h1 = document.querySelector('.text');
// const #dots = [...document.querySelectorAll('.#dots span')];
// //Implement

// //Change dot
// const #changeDot = () => {
//   const activeDot = #dots.findIndex((dot) => dot.classList.contains('active'));
//   #dots[activeDot].classList.remove('active');
//   #dots[active].classList.add('active');
// };

// //Change #image
// const #changeSlide = () => {
//   active++;
//   if (active === #slides.length) {
//     console.log('full loop');
//     active = 0;
//   }
//   #image.src = #slides[active].#image;
//   h1.textContent = #slides[active].text;
//   #changeDot();
// };
// //we using let, because we overwrite it on #key#ChangeSlide() for clear and set Interval again and again
// let slider = setInterval(#changeSlide, time);

// //Left Right arrow
// const #key#ChangeSlide = (e) => {
//   if (e.keyCode == 37 || e.keyCode == 39) {
//     clearInterval(slider);
//     e.keyCode == 37 ? active-- : active++;
//   }
//   if (active === #slides.length) {
//     active = 0;
//   } else if (active < 0) {
//     active = #slides.length - 1;
//   }
//   #image.src = #slides[active].#image;
//   h1.textContent = #slides[active].text;
//   #changeDot();
//   //We need to assign slider to the clearInterval(slider) on top if we wanna reuse it again!
//   slider = setInterval(#changeSlide, time);
// };
// const key = document.addEventListener('keydown', #key#ChangeSlide)
