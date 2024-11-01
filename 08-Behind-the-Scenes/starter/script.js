'use strict';
/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    } else {
      const firstName = 'Steven';
      var millenial = false;
      const str = `Oh, you're not a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    // console.log(add(2,3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Dan';

calcAge(1975);

// functions

console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// example
let numProducts = 10;

function deleteShoppingCart() {
  console.log('All products are deleted');
}

if (!numProducts) deleteShoppingCart();

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//this keyword in practice

console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge2(1975);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const ann = {
  firstName: 'Ann',
  lastName: 'Nakajima',
  year: 1980,
};
/*
dan.calcAge();

ann.calcAge = dan.calcAge;

ann.calcAge();

const f = dan.calcAge;

f();

// var firstName2 = 'DSP';

const dan = {
  firstName2: 'Dan',
  year: 1975,

  calcAge: function () {
    console.log(2024 - this.year);

    // soloution 1
    // const self = this;
    // // console.log(this);
    // const isMillenial = fu nction () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hi ${this.firstName2}`),
};
// arrow fun tion does not get it's own this keyword
dan.greet();
dan.calcAge();

// Arguments keyword
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExp(5, 10);
// no arguments in arrow function
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(10, 20);

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Dan',
  age: 49,
};

const friend = me;
friend.age = 30;

console.log('friend:', friend);
console.log('me:', me);
*/
// Primitive Types
let lastName = 'San Pedro';
let oldLastName = lastName;
lastName = 'Nakajima';
console.log(lastName);
console.log(oldLastName);
//Reference types
const dan = {
  firstName: 'Dan',
  lastName: 'San Pedro',
  age: 49,
};

const marriedDan = dan;
marriedDan.lastName = 'Nakajima';
console.log('before marriage:', dan);
console.log('after marriage:', marriedDan);

// marriedDan = {};

//copying objects

const dan2 = {
  firstName: 'Dan',
  lastName: 'San Pedro',
  age: 49,
  family: ['Ann', 'Nick', 'Jake'],
};
// object.assign creates a shallow copy
const danCopy = Object.assign({}, dan2);

danCopy.lastName = 'Nakajima';

danCopy.family.push('Aileen');
danCopy.family.push('Alexander');

console.log('before marriage:', dan2);
console.log('after marriage:', danCopy);
