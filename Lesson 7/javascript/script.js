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
