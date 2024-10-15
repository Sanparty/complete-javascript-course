// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === '23') console.log(23);

const calcAge = birthYear => 2024 - birthYear;

console.log(calcAge(1976));
*/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const temperatures2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 100, 9, 5];

// const sortNumbers = function (arr) {
//   const sortedTemperatures = arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(sortedTemperatures);
// };

// const temperatureAmplitude = function (temperatures) {
//   const sortedTemperatures = temperatures.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(sortedTemperatures);
//   return (
//     sortedTemperatures[sortedTemperatures.length - 1] - sortedTemperatures[0]
//   );
// };

// console.log(temperatureAmplitude(temperatures));

// const mergedTemps = function (temps, temps2) {
//   return temps.concat(temps2);
// };

// const calcTempAmplitude = function (temps) {
//   let maxTemp = temps[0];
//   let minTemp = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > maxTemp) maxTemp = currentTemp;
//     if (currentTemp < minTemp) minTemp = currentTemp;
//   }
//   console.log(maxTemp, minTemp);
//   return maxTemp - minTemp;
// };

// const mergedTemperatures = mergedTemps(temperatures, temperatures2);
// const amplitude = calcTempAmplitude(mergedTemperatures);
// console.log(mergedTemperatures);
// console.log(sortNumbers(mergedTemperatures));

// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'cels',
//     value: 10,
//     // value: Number(prompt('Degrees celsius')),
//   };

//   console.log(measurement);
//   console.table(measurement);
//   console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // a) identify the bug
// console.log(measureKelvin());

//using a debugger
// const mergedTemps = function (temps, temps2) {
//   return temps.concat(temps2);
// };

// const calcTempAmplitudeBug = function (temps) {
//   let maxTemp = 0;
//   let minTemp = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > maxTemp) maxTemp = currentTemp;
//     if (currentTemp < minTemp) minTemp = currentTemp;
//   }
//   console.log(maxTemp, minTemp);
//   return maxTemp - minTemp;
// };

// const mergedTemperatures = mergedTemps([3, 5, 1], [9, 4, 5]);
// const amplitudeBug = calcTempAmplitudeBug(mergedTemperatures);
// console.log(mergedTemperatures);
// console.log(sortNumbers(mergedTemperatures));

// console.log(amplitudeBug);

// need to print out forecast

// each index represents consecutive days....

// for each temperature, create corresponding day

const printForecast = function (arr) {
  const tempsDays = [];
  for (let i = 0; i < arr.length; i++) {
    tempsDays.push({
      reading: i,
      temperature: arr[i],
      days: i + 1,
    });
  }
  console.log(tempsDays);
  let tempsString = `...`;
  for (let i = 0; i < tempsDays.length; i++) {
    let textAdd = ` ${tempsDays[i].temperature}ºC in ${tempsDays[i].days} ${
      i === 0 ? 'day' : 'days'
    } ...`;
    tempsString = tempsString + textAdd;
  }
  return tempsString;
};

console.log(printForecast([17, 21, 23]));

console.log(printForecast([12, 5, -5, 0, 4]));

console.log(printForecast([18]));
