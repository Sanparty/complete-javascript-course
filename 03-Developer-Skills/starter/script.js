// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === '23') console.log(23);

const calcAge = birthYear => 2024 - birthYear;

console.log(calcAge(1976));
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatureAmplitude = function (temperatures) {
  const sortedTemperatures = temperatures.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedTemperatures);
  return (
    sortedTemperatures[sortedTemperatures.length - 1] - sortedTemperatures[0]
  );
};

console.log(temperatureAmplitude(temperatures));
