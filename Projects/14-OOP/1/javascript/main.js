import Slider from './Slider.js';
import Slide from './Slide.js';

const slideList = [
  {
    img: 'img/img1.jpg',
    txt: 'Page 1',
  },
  {
    img: 'img/img2.jpg',
    txt: 'Page 2',
  },
  {
    img: 'img/img3.jpg',
    txt: 'Page 3',
  },
];

const slider = new Slider(slideList, '.slider', '.text', '.dots span', 3000);

slider.start();
