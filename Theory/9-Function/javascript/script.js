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

//SUM EVERY NUMBER OF USERS MONEY
const addAllMoney = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const usersMoney = addAllMoney(10, 20, 30);
console.log(usersMoney);

console.log("");

//DIFFERENT BEHAVIOR DEPENDS ON DATA

function showInfoAboutUser(age, name, sex) {
  if (arguments.length === 0) {
    console.log("no info");
  } else if (arguments.length === 1) {
    console.log(`user is ${age} years old`);
  } else if (arguments.length === 2) {
    console.log(`user is ${age} years old, user name is ${name}`);
  } else if (arguments.length === 3) {
    console.log(
      `user is ${age} years old, user name is ${name}, user sex is ${sex}`
    );
  }
}

console.log(showInfoAboutUser(12, "Kuba"));

console.log("");

//REST OPERATOR

function showAllArguments(...items) {
  //WHAT WE WANT TO STORE
  console.log(arguments);
  return items;
}

console.log(showAllArguments("12", 12, {}, true));

console.log("");

function addAllWords(...words) {
  let txt = "";

  //1
  // let txt = "";
  // for (let i = 0; i < words.length; i++) {
  // txt += `${words[i] + " "}`;
  // }
  // return txt;

  //2
  // let txt = "";
  // for (let i = 0; i < words.length; i++) {
  // txt += words[i] + ' ';
  // }
  // return txt;

  //3
  //   words.forEach(function (word) {
  //     txt += word + " ";
  //   });

  //4
  words.forEach((word) => (txt += `${word} `));
  return txt;
}

console.log(addAllWords("kuba", "ma", "kota"));

function showPartySquad(owner, ...others) {
  console.log(
    `At the party was ${owner} 
    ${others.length ? "and " + others + "." : "."}` //condition!
  );
}
console.log(showPartySquad("Adrian", "efw", "ewf"));

console.log("");

//BASIC OBJECT

const objectExample = {
  name: "Kuba",
  showName: function () {
    console.log("Kuba2");
  },
  showAge: function () {
    console.log(21);
  },
};

objectExample.showAge();
objectExample.showName();

console.log("");

//EXERCISE

//1
function calculateAverage(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}
console.log(calculateAverage([1, 2, 3, 4]));

console.log("");

//2
function filterEvenNumbers(evenNumber) {
  let evenNumberList = [];
  for (let i = 0; i < evenNumber.length; i++) {
    if (evenNumber[i] % 2 === 0) {
      evenNumberList.push(evenNumber[i]);
    }
  }
  return evenNumberList;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

console.log("");

//3
function countOccurrences(array, element) {
  let score = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      score++;
    }
  }
  return score;
}

console.log(
  countOccurrences(
    [
      //THAT'S OUR ARRAY
      "apple",
      "banana",
      "apple",
      "orange",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ],
    "banana" //THAT'S OUR ELEMENT
  )
);
