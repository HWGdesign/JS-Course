const options = document.querySelectorAll('.option');
const spin = document.querySelector('.spin');
const stake = document.querySelector('.stake');

//bottom
const moneySpan = document.querySelector('.money');
const gamesSpan = document.querySelector('.games');
const winsSpan = document.querySelector('.wins');
const loosesSpan = document.querySelector('.looses');
const resultSpan = document.querySelector('.result');
const errorSpan = document.querySelector('.error');

const result = 'You won!';
let score = 0;

const startGame = () => {
  resultSpan.textContent = `${result}`;
  stake.value = '';
  errorSpan.textContent = 'wrong input!';
};

spin.addEventListener('click', startGame);
