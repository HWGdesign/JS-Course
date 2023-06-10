let numbers = [10, 11, 12, 13, 14, 15, 16];

const oddNumbers = numbers.filter((number) => number % 2);
console.log(`Odd numbers: ${oddNumbers}`);

const evenNumbers = numbers.filter((number) => !(number % 2));
console.log(`Even numbers: ${evenNumbers}`);

const doubleNumbers = numbers.map((number) => number * 2);
console.log(`Numbers double: ${doubleNumbers}`);
