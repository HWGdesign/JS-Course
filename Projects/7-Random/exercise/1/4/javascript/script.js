//Random 0-9 (without 10)
console.log(Math.floor(Math.random() * 10));

//Random 4-6 (without 6)
console.log(Math.floor(Math.random() * (6 - 4) + 4));

//Random 4-6 (with 6)
console.log(Math.floor(Math.random() * (6 - 4 + 1) + 4));

//Universal function 10-99 (without 100)
const numberRandom = (min, max) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
};

//Universal function 10-100 (with 100)
const numberRandom2 = (min, max) => {
  const number2 = Math.floor(Math.random() * (max - min + 1) + min);
  return number2;
};

//Shorter version
// const numberRandom2 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(numberRandom(10, 100));
console.log(numberRandom2(10, 100));
