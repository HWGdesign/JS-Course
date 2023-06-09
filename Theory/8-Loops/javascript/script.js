// FOR

for (let i = 0; i <= 5; i++) { // FOR (ITERATOR INITIALIZATION; CONDITION; ITERATION)
     console.log(i); 
};

console.log('');

// WHILE

let number = 0;
while (number <= 5 ) {
     console.log(number);
     number++;
};

console.log('');

let money = 50;
let coffeCost = 8.5;

while (money > coffeCost) {
     console.log(`My budget is: ${money}`);
     money -= coffeCost;
     console.log(`I can but Coffe. \nRemaining money: ${money}`);
}

console.log('');

let gasoline = 6;
let km = 0;

while (gasoline--){
     km += 5.5;
     console.log(`We drove: + ${km}km\nWe have ${gasoline} liters left`);
}

console.log('');

// DO WHILE

let study = 'String';

do {
     console.log('do while'); // MAKE ONE EVEN IF WRONG
}while (study == true);

console.log('')

// LOOP INSIDE LOOP

for (let i = 1; i <= 3; i++){
     for (let j = 0; j <= 2; j++){
          console.log(`${i} * ${j} = ${i * j}`);
     }
}

console.log('')

// LOOP ON ARRAY

const usersAge = [19, 20, 35, 55, 70, 65]; //Our arrayID is variable in our loop 

for (let i = 0; i < usersAge.length; i++){
     console.log(`UserID:${i} age is ${usersAge[i]}`);
}

console.log('')

const userBirth = [2000, 2001, 2002, 2008];
const currentYear = 2023;

for (let i = 0; i < userBirth[i]; i++){
     const userAge = currentYear - userBirth[i];
     //console.log(`userID: ${i}, born in:${userBirth[i]} is ${currentYear - userBirth[i]} years old.`);
     console.log(`UserID ${i}, born in ${userBirth[i]} is ${userAge}`);
}

console.log('');

const guest = ['waiter', 'police officer', 'chef', 'footballer', 'web developer']

for (let i = 0; i < guest.length; i++){
     if(guest[i] === 'waiter' || guest[i] === 'chef'){
          console.log(`${guest[i]}, You're welcome!`);
     }else
          console.log(`${guest[i]}, You're not on a list.`);
     }

console.log('');

const colors = ['red', 'green', 'blue', 'gold'] //WE ASSIGNED color TO EVERY ARRAY INDEX

for (const color of colors) {
     console.log(`my favorite color is ${color}`);
}

console.log('');

//EXERCISE 

//1

let sum = 0;

for(let i = 1; i <= 100; i++){
     if(i % 2 === 0){
          sum += i; //EVERY TIME WE ADD VALUE TO EACH OTHER 
     }
}

console.log(`Sum of every equal number is ${sum}`);

console.log('');

//2

const height = 6;

for(let i = 0; i <= height; i++){
     if(i){
          console.log('*'.repeat(i));  //WE REPEATING IN ADDITION TO height
     }
}

console.log('');

//3

let value = 0;

for(let i =1; i <=50; i++){
     if(i % 3 === 0){
          value++; //EVERY TIME WE INCREASE VALUE
     }
}
console.log(value);