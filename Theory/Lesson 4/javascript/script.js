const txt = 'some text';
const score = 12.55;
console.log(txt.length);
console.log(txt[2]);
console.log(txt.toUpperCase());

console.log(score.toFixed() );
console.log(score.toFixed(1) );
console.log(txt.indexOf('e') );

const name = 'Jacob';
console.log(name.length);

const userName = new String('RandomName');
const userID = new Number(1);
const isMale = new Boolean(true);
console.log(userName, userID, isMale); //make instance

//Task 

let myVariable = 10;
let myName = 'Benedykt';

console.log(typeof(myVariable));
console.log(typeof(myName));
myVariable = 11;
myName = 'Mieszko';

let sum = myVariable + 5;
let greeting = myName + " witaj w świecie Javascript"

console.log(sum);
console.log(greeting);
