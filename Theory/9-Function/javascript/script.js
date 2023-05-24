// FUNCTION

const showMessage = function (message) {
  console.log(message);
};

showMessage("This is simple message");

console.log("");

function addNumber(n1, n2) {
  return n1 + n2;
}

console.log(addNumber(1, 4));

console.log("");

//CONSTRUCTOR

const textAlert = new Function("text", "console.log(text);"); //OTHER WAY
textAlert("hej?");

console.log("");

//ARROW FUNCTION

//const functionName = () => {};             THEY ARE DOING THE SAME
//const functionName = function() {};        BUT THIS ONE IS ANONYMOUS

const showText = (txt) => {
  console.log(txt);
};

showText("Hello");

//RETURN

const divideByTwo = function (number) {
  // number / 2;                          UNDEFINED
  return number / 2; //RETURNING EVERYTHING WHAT WE DEFINE
};
const result = divideByTwo(134);
console.log(result);

const divideByFive = function (number) {
  //number - parameter
  const result2 = number / 5; //WE CAN DEFINE INSIDE FUNCTION
  return console.log(result2);
};

divideByFive(324); //324 - argument

//ES6

//SET DEFAULT VALUES, IF NOT undefined
const addTwoNumbers = (first = 0, second = 0) => {
  const result = first + second;
  return result;
};

console.log(addTwoNumbers(2, 4)); //6
console.log(addTwoNumbers()); //0

//WE CAN MAKE SAME THING USING FUNCTION

// const addTwoNumbers = function(first = 0, second = 0) {
//      const result = first + second;
//      return result;
// }

console.log("");

//CALLBACK

function count(x, callback) {
  return callback(x);
}

function addOne(number) {
  number++;
  return number;
}

function subtractOne(number) {
  number--;
  return number;
}

console.log(addOne(45));
console.log(subtractOne(10));
console.log(count(1221, subtractOne)); //CALLBACK WITH USE OF OTHER FUNCTIONS

console.log("");

// CALLBACK v2

const usersAge = [20, 25, 30, 45, 54, 59];

// userAge.forEach((userAge) => console.log(`wiek użytkownika to ${userAge}`));

usersAge.forEach(function (usersAge) {
  console.log(`wiek użytkownika to ${usersAge}`);
});

console.log("");

//LISTENING

const showClick = function () {
  console.log("You clicked me!");
};

window.addEventListener("click", showClick);

//SETINTERVAL

const showTime = () => {
  console.log("*click*");
};

// setInterval(showTime, 2000);

console.log("");

//ARGUMENTS

//SHOW ARGUMENTS THAT FUNCTION INCLUDES
const showArguments = function () {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(typeof arguments);
};

showArguments("hello", 3, null, 23);

//SUM EVERY NUMBER OF USER MONEY
const addAllNumbers = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const usersMoney = addAllNumbers(10, 10, 10);
console.log(usersMoney);
