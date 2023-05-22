console.log('__ASIGN, COMPARE__');

let number;
console.log(number);
number = 3; //asign value
console.log(number);
console.log('2' == 2); //comparison with type conversion
console.log('2' === 2); //comparison without type conversion
console.log(100 == 101);
console.log(100 != 101);
console.log(100 !== 100);
console.log('100' != 100);
console.log('100' !== 100);

console.log('___NEGATION___');

console.log(!''); // negation changes the type to boolean and inverts
console.log(!'kuba'); 
console.log(!!''); // double-negation changes the type to boolean and double-inverts
console.log(!!'kuba'); 

console.log('__OR__');

console.log( 2 || 5); // OR
console.log(0 || true);

console.log('__AND__');

console.log(2 && 1); // AND
console.log(2 && 0);

console.log('__TRIPLE__');

console.log(3 > 2 ? "tak" : "nie"); //IF YES -> PRINT THING ON LEFT, IF NOT -> PRINT THING ON RIGHT