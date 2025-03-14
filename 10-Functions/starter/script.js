'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH130', 2, 800);
createBooking('LH130', 2);
createBooking('LH130', undefined, 1000);
console.log(bookings);



const flight = 'LH234';
const dsp = {
  name: 'Dan San Pedro',
  passport: 234739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 234739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport! ' + passenger.passport);
  }
};

// checkIn(flight, dsp);

// console.log(flight);
// console.log(dsp);

// const flightNum = flight;
// const passenger = dsp;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(dsp);

checkIn(flight, dsp);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

let textCalled = '';
const high5 = function () {
  if (textCalled.length / 2 < 10) {
    textCalled += '👌';
    console.log(textCalled.length);
  } else {
    textCalled = 'Stop pressing';
  }
  document.querySelector('h1').innerText = textCalled;
  console.log('👋');
};

document.body.addEventListener('click', high5);

// ['Dan', 'Ann', 'Jake'].forEach(high5);


// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');

greeterHey('Dan');

greeterHey('Ann');

greet('Hello')('DSP');



const airCanada = {
  airline: 'Air Canada',
  iataCode: 'AC',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}}`,
      name,
    });
  },
};

airCanada.book(239, 'Dan');
airCanada.book(567, 'Ann');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

console.log(airCanada.bookings);

const book = airCanada.book;

book.call(eurowings, 23, 'Nick Manucdoc');

console.log(eurowings);
book.call(airCanada, 239, 'Jake Manucdoc');
console.log(airCanada.bookings);

const japanAirlines = {
  airline: 'Japan Airlines',
  iataCode: 'JAL',
  bookings: [],
};

book.call(japanAirlines, 234, 'Lorenzo San Pedro');

console.log(japanAirlines);

//Apply method

const flightData = [583, 'George Cooper'];
book.apply(japanAirlines, flightData);
console.log(japanAirlines);

book.call(japanAirlines, ...flightData);

console.log(japanAirlines);

//Bind method
// book.call(eurowings, 23, 'Nick Manucdoc');

const bookEW = book.bind(eurowings);
const bookJAL = book.bind(japanAirlines);

bookEW(23, 'Jake Manucdoc');
bookJAL(45, 'Jake Manucdoc');

const bookEW23 = book.bind(eurowings, 235);

bookEW23('Donald Smith');

//With Event Listeners

japanAirlines.planes = 300;
japanAirlines.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', japanAirlines.buyPlane.bind(japanAirlines));

//Partial application - you can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = prompt(`${this.question}
      ${this.options}
      (Write option number)`);
    if (Number.isNaN(answer)) {
      console.log(answer);
      this.answers[answer] = this.answers[answer] + 1;
    } else {
      alert('Please enter a correct option!');
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
