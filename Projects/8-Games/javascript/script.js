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

//Rock
rockPicked = () => {
  userMoveID = 1;
  computerMove();
  if (userMoveID == computerMoveID) {
    //ROCK id 1
    document.querySelector(".yourChoice").textContent = `Your choice: Rock`;
    document.querySelector(".computerChoice").textContent = `PC choice: Rock`;
    document.querySelector(".gameResult").textContent = `Result: Draw`;
    document.querySelector(".draws").textContent = `Draws: ${++draws}`;
  } else if (computerMoveID == 2) {
    //PAPER id 2
    document.querySelector(".yourChoice").textContent = `Your choice: Rock`;
    document.querySelector(".computerChoice").textContent = `PC choice: Paper`;
    document.querySelector(".gameResult").textContent = `Result: You lost`;
    document.querySelector(".loses").textContent = `Loses: ${++loses}`;

    console.log("PC: paper");
  } else if (computerMoveID == 3) {
    //SCISSORS id 3
    document.querySelector(".yourChoice").textContent = `Your choice: Rock`;
    document.querySelector(
      ".computerChoice"
    ).textContent = `PC choice: Scissors`;
    document.querySelector(".gameResult").textContent = `Result: You won`;
    document.querySelector(".wins").textContent = `Wins: ${++wins}`;
  }
  document.querySelector(
    ".games"
  ).textContent = `Games played: ${++gamesPlayed}`;
};
//Paper
paperPicked = () => {
  userMoveID = 2;
  computerMove();

  if (computerMoveID == 1) {
    //ROCK id 1
    document.querySelector(".yourChoice").textContent = `Your choice: Paper`;
    document.querySelector(".computerChoice").textContent = `PC choice: Rock`;
    document.querySelector(".gameResult").textContent = `Result: You won`;
    document.querySelector(".wins").textContent = `Wins: ${++wins}`;
  } else if (computerMoveID == userMoveID) {
    //PAPER id 2
    document.querySelector(".yourChoice").textContent = `Your choice: Paper`;
    document.querySelector(".computerChoice").textContent = `PC choice: Paper`;
    document.querySelector(".gameResult").textContent = `Result: Draw`;
    document.querySelector(".draws").textContent = `Draws: ${++draws}`;
    //SCISSORS id 3
  } else if (computerMoveID == 3) {
    document.querySelector(".yourChoice").textContent = `Your choice: Paper`;
    document.querySelector(
      ".computerChoice"
    ).textContent = `PC choice: Scissors`;
    document.querySelector(".gameResult").textContent = `Result: You lost`;
    document.querySelector(".loses").textContent = `Loses: ${++loses}`;
  }
  document.querySelector(
    ".games"
  ).textContent = `Games played: ${++gamesPlayed}`;
};

//Scissors
scissorsPicked = () => {
  userMoveID = 3;
  computerMove();
  if (computerMoveID == 1) {
    //ROCK id 1
    document.querySelector(".yourChoice").textContent = `Your choice: Scissors`;
    document.querySelector(".computerChoice").textContent = `PC choice: Rock`;
    document.querySelector(".gameResult").textContent = `Result: You lost`;
    document.querySelector(".loses").textContent = `Loses: ${++loses}`;
    //PAPER id 2
  } else if (computerMoveID == 2) {
    document.querySelector(".yourChoice").textContent = `Your choice: Scissors`;
    document.querySelector(".computerChoice").textContent = `PC choice: Paper`;
    document.querySelector(".gameResult").textContent = `Result: You win`;
    document.querySelector(".wins").textContent = `Wins: ${++wins}`;
  } else if (computerMoveID == userMoveID) {
    //SCISSORS id 3
    document.querySelector(".yourChoice").textContent = `Your choice: Scissors`;
    document.querySelector(
      ".computerChoice"
    ).textContent = `PC choice: Scissors`;
    document.querySelector(".gameResult").textContent = `Result: Draw`;
    document.querySelector(".draws").textContent = `Draws: ${++draws}`;
  }
  document.querySelector(
    ".games"
  ).textContent = `Games played: ${++gamesPlayed}`;
};

//Listening
rock.addEventListener("click", rockPicked);
paper.addEventListener("click", paperPicked);
scissors.addEventListener("click", scissorsPicked);
