//Buttons
const rock = document.querySelector(".rock-js");
const paper = document.querySelector(".paper-js");
const scissors = document.querySelector(".scissors-js");

//Functions

//Random number between 1-3
randomNumber = () => Math.floor(Math.random() * (3 - 1 + 1) + 1);

//Moves
let userMoveID = 0;
let computerMoveID = 0;

//Scoreboard
let gamesPlayed = 0;
let wins = 0;
let draws = 0;
let loses = 0;
//Choices
let userChoice = "";
let computerChoice = "";
let result = "";

//ComputerMove
const computerMove = function () {
  if (randomNumber() === 1) {
    //Rock
    computerMoveID = 1;
  } else if (randomNumber() === 2) {
    //Paper
    computerMoveID = 2;
  } else if (randomNumber() === 3) {
    //Scissors
    computerMoveID = 3;
  }
};

//! Rock
rockPicked = () => {
  userMoveID = 1;
  computerMove();

  if (userMoveID == computerMoveID) {
    //ROCK id 1
    document.querySelector(".yourChoice").textContent = `Rock`;
    document.querySelector(".computerChoice").textContent = `Rock`;
    document.querySelector(".gameResult").textContent = `Draw`;
    document.querySelector(".draws").textContent = `${++draws}`;
  } else if (computerMoveID == 2) {
    //PAPER id 2
    document.querySelector(".yourChoice").textContent = `Rock`;
    document.querySelector(".computerChoice").textContent = `Paper`;
    document.querySelector(".gameResult").textContent = `Lost`;
    document.querySelector(".loses").textContent = `${++loses}`;
  } else if (computerMoveID == 3) {
    //SCISSORS id 3
    document.querySelector(".yourChoice").textContent = `Rock`;
    document.querySelector(".computerChoice").textContent = `Scissors`;
    document.querySelector(".gameResult").textContent = `Win`;
    document.querySelector(".wins").textContent = `${++wins}`;
  }
  //Other

  document.querySelector(".games").textContent = ` ${++gamesPlayed}`;
};
//! Paper
paperPicked = () => {
  userMoveID = 2;
  computerMove();

  if (computerMoveID == 1) {
    //ROCK id 1
    document.querySelector(".yourChoice").textContent = `Paper`;
    document.querySelector(".computerChoice").textContent = `Rock`;
    document.querySelector(".gameResult").textContent = `Win`;
    document.querySelector(".wins").textContent = `${++wins}`;
  } else if (computerMoveID == userMoveID) {
    //PAPER id 2
    document.querySelector(".yourChoice").textContent = `Paper`;
    document.querySelector(".computerChoice").textContent = `Paper`;
    document.querySelector(".gameResult").textContent = `Draw`;
    document.querySelector(".draws").textContent = `${++draws}`;

    //SCISSORS id 3
  } else if (computerMoveID == 3) {
    document.querySelector(".yourChoice").textContent = `Paper`;
    document.querySelector(".computerChoice").textContent = `Scissors`;
    document.querySelector(".gameResult").textContent = `Lost`;
    document.querySelector(".loses").textContent = `${++loses}`;
  }

  document.querySelector(".games").textContent = ` ${++gamesPlayed}`;
};

//! Scissors
scissorsPicked = () => {
  userMoveID = 3;
  computerMove();

  if (computerMoveID == 1) {
    //ROCK id 1
    document.querySelector(".yourChoice").textContent = `Scissors`;
    document.querySelector(".computerChoice").textContent = `Rock`;
    document.querySelector(".gameResult").textContent = `Lost`;
    document.querySelector(".loses").textContent = `${++loses}`;
    //PAPER id 2
  } else if (computerMoveID == 2) {
    document.querySelector(".yourChoice").textContent = `Scissors`;
    document.querySelector(".computerChoice").textContent = `Paper`;
    document.querySelector(".gameResult").textContent = `Win`;
    document.querySelector(".gameResult").classList;
    document.querySelector(".wins").textContent = `${++wins}`;
  } else if (computerMoveID == userMoveID) {
    //SCISSORS id 3
    document.querySelector(".yourChoice").textContent = `Scissors`;
    document.querySelector(".computerChoice").textContent = `Scissors`;
    document.querySelector(".gameResult").textContent = `Draw`;
    document.querySelector(".draws").textContent = `${++draws}`;
  }

  document.querySelector(".games").textContent = `${++gamesPlayed}`;
};

//Listening
rock.addEventListener("click", rockPicked);
paper.addEventListener("click", paperPicked);
scissors.addEventListener("click", scissorsPicked);
