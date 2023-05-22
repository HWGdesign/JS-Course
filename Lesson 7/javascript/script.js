// BASIC INFO 

const nameList = ['Kuba', 'Andy', 'John'];
nameList[3] = 'Robert';
console.log(nameList);

console.log(nameList[1]);
console.log(nameList[2] === 'Kuba');

console.log(nameList);
delete nameList[0];

console.log(nameList);
console.log(nameList.length);

const users = [];
users.length = 10;
console.log(users);

users[users.length - 1] //length of the Array

users.length = 0;
console.log(users);

console.log(users instanceof Array);

const [nameUser,  idUser, ageUser] = ['Kuba', 12, 21];
console.log(nameUser, idUser, ageUser);

console.log('');

// METHODS ON ARRAYS

const italianUsers = ['Giovani', 'Marco', 'Antonio', 'Luigi', 'Mario', 'Bernardo'];
console.log(italianUsers);

italianUsers.push('Felicio'); //ADD TO THE END
console.log(italianUsers);

italianUsers.pop(); //DELETE LAST 
console.log(italianUsers);

italianUsers.unshift('Adriano'); //ADD TO THE FRONT
console.log(italianUsers);

italianUsers.shift(); //DELETE FIRST 
console.log(italianUsers);

console.log('');

// CONCAT

const redColor = ['red', 'bloody', 'rose'];
console.log(redColor);

const yellowColor = ['sunflower', 'sun', 'gold'];
console.log(yellowColor);

const redAndYellow = redColor.concat(yellowColor); //CONCATINATION ON TWO TABLES
console.log(redAndYellow);

console.log([...redColor]); // [...redColor] -> ['red', 'bloody', 'rose']

console.log('');

// SLICE

const numbers = [1,2,3,4,5,6,7];
console.log(numbers);

console.log(numbers.slice(0,3)); // FROM 0-2 index, without 3rd index (3 elements)
console.log(numbers.slice(1, numbers.length -1)); // (START, END)
console.log(numbers.slice(-2)); // TWO FROM BEHIND

console.log('');

// SPLICE

const animals = ['Lion', 'Elephant', 'Wolf', 'Rabbit'];
console.log(animals);

console.log(animals.splice(0, 1)); // FROM WHERE WE WANT TO DELETE, HOW MANY TO DELETE (del first)
console.log(animals);

console.log(animals.splice(0)); // CLEAR ARRAY
console.log(animals);

const someID = ['A', 'B', 'C', 'D'];
console.log(someID);

console.log(someID.splice(0, 1, 'ReplacedID')); // REPLACE Something
console.log(someID);

console.log(someID.splice(someID.length,0, 'newID'));  // ADD Something
console.log(someID);

console.log('');

// SORT

const SortExample = ['b', 'g', 'f', 'z', 'g', 'a'];
console.log(SortExample);
console.log(SortExample.sort()); //APLHABETIC SORT

//INDEX

console.log(SortExample.indexOf('g')); //FIND INDEX
console.log(SortExample.lastIndexOf('g')); //FIND INDEX

//INCLUDES

console.log(SortExample.includes('o')); // CHECK IF INCLUDES

//JOIN

console.log(SortExample.join(', ')); // MAKE STRING IN PARENTHESIS IS FORMULA WHICH IS APPLIED BETWEEN ELEMENTS
console.log(SortExample.join('\n'));

// REVERSE

console.log(SortExample.reverse()); // REVERSE

console.log('');

//SPLIT

const splitExample =('Kuba Adam John'.split(' ')); //MAKE ARRAY FROM STRING
console.log(splitExample);

const splitExample2 =('Kuba, Adam, John'.split(', ')); //MAKE ARRAY FROM STRING
console.log(splitExample2);

console.log('');

//EXERCISE
//1 -Done
const numbersExercise = [5,10,15];
console.log(numbersExercise); 

const firstElement = numbersExercise[0];
const secondElement = numbersExercise[1];
const thirdElement = numbersExercise[2];

if(firstElement + thirdElement > secondElement){
     console.log('Suma pierwszego i ostatniego elementu jest większa niż drugi element');
}else{
     console.log('Suma pierwszego i ostatniego elementu nie jest większa niż drugi element');
}

//2 - Done
const firstArray = [1, 2, 1, 4];
const secondArray = [4, 5, 2, 4, 5];

if(firstArray.length == secondArray.length)
{
     console.log('są takie same');
}else{
     if(firstArray.length > secondArray.length){
          console.log('Pierwsza tablica jest dłuższa');
     }else{
          console.log('Druga tablica jest dłuższa');
     }
}

//3 - Done

const fruits = ["pinapple", "banana", "orange"];
const fruits_v2 = ["apple", "banana", "orange"];

if(fruits[0] === 'apple'){
     console.log("Pierwszy element tablicy to 'apple'");
}else{
     console.log("Pierwszy element tablicy, to nie 'apple'");
}











