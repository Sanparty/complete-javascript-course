'use strict';

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
      function add(a,b) {
        return a + b;
      }
      output = 'NEW OUTPUT!'
      
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
