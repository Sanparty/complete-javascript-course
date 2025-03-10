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

*/

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
