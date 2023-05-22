
// NUMBER

const hexNumber = 0xfff; // equal to 4095
console.log(hexNumber);

const newNumber = 123.456
console.log(newNumber.toFixed(1));  //string
console.log(Number(newNumber.toFixed(1)));  //number
console.log(newNumber.toString());
console.log(123..toFixed()); // double dots

const IntegerNumber = 100;
const FiniteNumber = 42.223213;

console.log(Number.isInteger(IntegerNumber)); //even number
console.log(!Number.isInteger(IntegerNumber)); //odd number
console.log(Number.isFinite(FiniteNumber));  

const numberObj = new Number(); //object
console.log(numberObj);

console.log(20 % 2); //modulo 0 because 20/2 = 10
console.log(22 % 5); //modulo 2 because 22/5 = 20/5=4 and the rest is 2

console.log(20+""); //number to string hack
console.log(+"20"); //string to number hack
console.log(-"20"); //string to number hack

console.log(parseInt('20', 10)); //string to number
console.log(parseInt('20'));

console.log(parseInt('2') + parseInt('23')); //  addition instead of concatenation 

console.log(Math.round(2323.324)); //round
console.log(Math.floor(2323.324)); //delete thins behind dot
console.log(Math.random()); // random number 0-1

let score = 0;
score++; //add 1, increment
score += 5; //add 5
console.log(score); console.log('');


// STRING

const userName = 'Kuba'; //string
const userName2 = `Przemek`; //super string

console.log(userName, userName2);

const userNameUpper = userName.toUpperCase(); //make variables that used methods

console.log(userNameUpper); 

console.log(userName.length);
console.log(userName['length']);

console.log(userName[2]);
console.log(userName.charAt(2));

console.log(`${userName}`); // gravis, super string

console.log(userName.includes('uba'));

const afterTrim = '       word     '.trim();
console.log(afterTrim); // trimming string

const repeatString = 'word '.repeat(5);
console.log(repeatString);

const sliceWord = userName.slice(2,4);
console.log(sliceWord);

const singleQuote = "I'm Kuba"
console.log(singleQuote);

const superText = `JS
is
awsome`

console.log(superText);

console.log(Boolean('')); //fals e
console.log(Boolean('some text')); //true
console.log('');

// BOOLEAN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(" ")); //space is also true
console.log(Boolean(23));

//! False value: 0, -0, NaN, Infinity, null, undefined, '';

console.log(2>4);
console.log(2==2); // 

const randomPersonName = 'John';
console.log(!randomPersonName);

let userAge = 22;
let userMoney = 10.2;
let beerPrice = 8;

const canBuy = (userAge >= 18 && userMoney > beerPrice); // condition with AND (&&)
console.log(canBuy);



