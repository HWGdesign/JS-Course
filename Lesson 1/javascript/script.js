let userName = "Adam";
console.log(typeof userName);
console.log(typeof '222');
console.log(typeof 222);
console.log(typeof 2>2);
console.log(typeof true);
console.log(typeof undefined);

console.log(typeof {});
console.log(typeof function(){ });
console.log(typeof []);


let primitiveType = 20;
let primitiveTypeSecond = primitiveType;
primitiveType = 30;
console.log(primitiveTypeSecond);

let referenceValueFirst = [1,2,3];
let referenceValueSecond = referenceValueFirst;
console.log(referenceValueSecond);

referenceValueFirst[3] = 'elo';
console.log(referenceValueFirst); 

