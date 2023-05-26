//! HOISTING, works with VAR
// console.log(typeNumber);     Return: ERROR
console.log(typeBoolean);

const typeNumber = 20;
let typeString = "wnvnrwjk";
var typeBoolean = true;

console.log("");

//! SCOPE

var userID = 10;
const colorID = 5;
let userAge = 21;

userID = 5;
console.log(userID);

console.log("");

// FIRSTLY IT SEARCH INSIDE OWN "GROUP/SCOPE" (John), IF NOT THEN IT WILL TAKE GLOBAL ONE(Adam)
const userName = "Adam";

function showName() {
  const userName = "John";
  console.log(userName);
}
showName();

console.log("");

//example 2
//no global
function calculate(a, b) {
  const number1 = a;
  const number2 = b;

  console.log(number1);
  console.log(number2);

  function add() {
    // number2 = 10;    //we can't change, because of CONST not LET
    const number2 = 15;
    console.log(number1 + number2);
  }
  add();
}

calculate(4, 5);

console.log("");

//SCOPE BLOCK

let var1 = 1;
const var2 = 2;
var var3 = 3;

{
  let var1 = "Inside 1";
  const var2 = "Inside 2";
  var var3 = "Inside 3"; //WE OVERWRITE VARIABLE

  console.log(var1);
  console.log(var2);
  console.log(var3);
}

console.log(var1);
console.log(var2);
console.log(var3); //VAR SAVES THING THAT WAS CHANGED INSIDE BRACKETS

console.log("");

//i IS DEFINED THREE TIMES, BUT WORKING INDEPENDENT INSIDE HIS OWN AREA
let i = 10;
for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i < 4) {
    const i = "Hello!";
    console.log(i);
  }
}
