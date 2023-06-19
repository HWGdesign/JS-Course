// CONSTRUCTOR
// const Car = function () {};
function Car(name, age) {
  this.name = name;
  this.age = age;
}

const renault = new Car('renault', 1992);
const mercedes = new Car('mercedes', 2004);

renault.age = 1995;

//PROTOTYPE
//1
const Person = function (name, age = '--') {
  this.name = name;
  this.age = age;
  this.children = [];
};

Person.prototype.addChildren = function (name) {
  this.children.push(name);
};

const John = new Person('John', 21);
const Emily = new Person('Emily', 16);

Emily.addChildren('Ellie');

//2
function Player() {}
const Jacky = new Player();

class User {}
const Emma = new User();

//3

function Citizen(country, citizenship) {
  this.country = country;
  this.citizenship = citizenship;
}

Citizen.prototype.changeCitizenship = function (newCitizenship) {
  this.citizenship = newCitizenship;
};

const Andy = new Citizen('Poland', 'Polish');
Andy.changeCitizenship('English');

//4
const arr = [2, 3, 4, 5, 6];
Array.prototype.delete = function (index) {
  return this.splice(index, 1);
};
console.log(arr);
arr.delete(0);
console.log(arr);

//CLASSES

//1
class Family {
  constructor(membersQuantity, ...names) {
    this.membersQuantity = membersQuantity;
    this.names = names;
  }
  addChildren(name) {
    this.names.push(name);
    this.membersQuantity++;
    console.log(`Member added: ${name}, FamilyQuantity: ${this.membersQuantity}`);
  }
  static makeFamily(...members) {
    return members;
  }
}

const Nowak = new Family(2, 'Adam', 'Eva');

Nowak.addChildren('Ala');

console.log(Nowak);

Family.makeFamily('Jan', 'Ewa');

//2

class Animal {
  constructor(age) {
    this.age = age;
  }
  whatIsThis() {
    console.log('Animal');
  }
}

class Mammal extends Animal {
  constructor(age, hair) {
    super(age);
    this.hair = hair;
  }
  whatIsThis2() {
    console.log('Animal->Mammal');
  }
}

class Human extends Mammal {
  constructor(age, hair, language) {
    super(age, hair);
    this.language = language;
  }
  whatIsThis3() {
    console.log('Animal->Mammal->Human');
  }
}

const human = new Human(20, 'brown', 'Polish');
console.log(human);

//THIS
//1
const fn = function () {
  console.log(this.name);
};

const obj = {
  name: 'Adam',
  showName: fn,
};

obj.showName();
