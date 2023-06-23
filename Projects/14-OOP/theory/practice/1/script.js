// const addSquareBtn = document.querySelector('.click');
// const squaresDiv = document.querySelector('.squares');
// let number = 0;

// addBtn = () => {
//   const square = document.createElement('div');
//   square.textContent = ++number;
//   square.classList.add('square');
//   squaresDiv.appendChild(square);
//   if (number % 5 == 0) {
//     square.style.backgroundColor = 'blue';
//   }
// };
// addSquareBtn.addEventListener('click', addBtn);

class NumberAdd {
  constructor(selector, startNumber, step) {
    this.btn = document.querySelector(selector);
    this.number = startNumber;
    this.step = step;
    this.btn.addEventListener('click', this.addElement.bind(this));
  }
  addElement() {
    const squaresDiv = document.querySelector('.squares');
    const div = document.createElement('div');
    div.textContent = this.number;
    this.number += this.step;
    div.classList.add('square');
    squaresDiv.appendChild(div);
  }
}

const NewNumberAdd = new NumberAdd('.click', 1, 3);
