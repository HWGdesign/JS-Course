//OBJECTS
const cat = new Object();
console.log(cat);

cat.name = "Garfield";
console.log(cat);

cat["cat age"] = 13; //use when we have space in name (don't do this xD)
console.log(cat);

cat.meow = function () {
  console.log("meow!");
};

console.log(cat.meow());

console.log("");

const dog = {
  name: "Scooby",
  age: 10,
  "eye color": "red",
  bark: function () {
    console.log("woof");
  },
};

console.log(dog);
console.log(dog["eye color"]);
console.log(dog.bark());

dog.children = ["Spark", "Bozer"];

console.log(dog.children);
delete dog.children;

console.log(dog.children);

console.log("");

const result = {
  value: 1,
};

function plus() {
  result.value++;
}
plus();
console.log(result.value); //added 1 to the value

const counter = {
  score: 0,

  increment: function () {
    this.score++; //we are using 'this.', instead of "counter.score" etc...
    console.log(this.score);
  },
};
counter.increment();

// template string

const price = 89;
const tax = 23;

console.log(`Final price is ${(price + (price * tax) / 100).toFixed(2)}`);
