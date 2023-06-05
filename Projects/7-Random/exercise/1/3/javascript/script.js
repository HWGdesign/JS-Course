//Buttons
const addBtn = document.querySelector(".buttonAdd-js");
const resBtn = document.querySelector(".buttonReset-js");
const showAdv = document.querySelector(".buttonShowAdv-js");
const showPos = document.querySelector(".buttonShowPos-js");

//Input
const input = document.querySelector(".input-js");

//Array
const advice = [];

//Add to array
addAdvise = (e) => {
  const newAdvice = input.value;
  //! TO REMEMBER !
  if (newAdvice) {
    for (adv of advice) {
      if (adv === newAdvice) {
        alert("duplicate");
        return;
      }
    }
    advice.push(input.value);
    input.value = "";
    console.log(advice);
  }
};

//Reset all array
resetAdvice = () => {
  advice.length = 0;
  input.value = "";
  console.log(advice);
};

//Show all array
showPossibilities = () => {
  if (advice.length != 0) {
    alert(advice);
  } else {
    alert("empty");
  }
};

//Show all advices
showAdvise = () => {
  if (advice.length != 0) {
    const index = Math.floor(Math.random() * advice.length);
    alert(advice[index]);
  } else {
    alert("empty");
  }
};
//Add with enter
input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addAdvise();
  }
});
showPos.addEventListener("click", showPossibilities);
showAdv.addEventListener("click", showAdvise);
resBtn.addEventListener("click", resetAdvice);
addBtn.addEventListener("click", addAdvise);
