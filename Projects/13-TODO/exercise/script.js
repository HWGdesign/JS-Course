//MAP
// const arr = [4, 3, 5, 5, 3];
// function addNumbersFromArray(numbers = []) {
//   let sum = 0;
//   numbers.map((number) => (sum += number));
//   return sum;
// }
// console.log(addNumbersFromArray(arr));

//FOREACH
// const arr = [4, 3, 5, 5, 3];
// function addNumbersFromArray(numbers = []) {
//   let sum = 0;
//   numbers.forEach((number) => (sum += number));
//   return sum;
// }
// console.log(addNumbersFromArray(arr));

//REDUCE
const arr = [4, 3, 5, 5, 3];
function addNumbersFromArray(numbers = []) {
  return numbers.reduce((prev, next) => prev + next, 10);
}
console.log(addNumbersFromArray(arr));

//FOR OF
// const arr = [4, 3, 5, 5, 3, 10];
// function addNumbersFromArray(numbers = []) {
//   let sum = 0;
//   for (number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(addNumbersFromArray(arr));
