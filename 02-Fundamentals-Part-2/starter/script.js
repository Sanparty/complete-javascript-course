'use strict';

/*
let passTest = '';

function passTestQuery() {
   passTest =  document.getElementById('passTestQuestion').value;
    if (passTest) {
        console.log(typeof passTest);
        if (passTest == 'yes') {
            console.log('yes works')
            document.getElementById('passShow').innerText = 'I can drive'
        } else if (passTest == 'no') {
            console.log('no works')
            document.getElementById('passShow').innerText = 'I cannot drive'
        } else {
            document.getElementById('passShow').innerText = 'Choose an answer please'
        }
    }    
};  





console.log(passTest);
    hasDriversLicense = passTest;
    console.log(hasDriversLicense);
    if (hasDriversLicense) {
            document.getElementsByTagName('h1')[0].innerText = 'I can drive'
        } else {
            document.getElementsByTagName('h1')[0].innerText = 'I cannot drive'
    }

    document.getElementsByTagName('h1')[0].innerText = `${hasDriversLicense ? 'I can drive' : 'I cannot Drive'}`;

console.log(hasDriversLicense);
if (hasDriversLicense) console.log('I can drive');



 

const interface = 'Audio';

const private = 534;


let studentFirstName = '';

function logger(name) {
    const studentName = `My name is ${name}`;
    console.log(studentName);
    studentFirstName = name;
    return studentName;
};

//calling, running or invoking the function
const student1 = logger('Dan');
const student2 = logger('Ann');
const student3 = logger('Nick');
const student4 = logger('Jake');

console.log(student1,student2,student3,student4)

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(4, 5);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3,10);
console.log(appleOrangeJuice);


// function delaration
// you can call function declaration before you define it
const danAge1 = calcAge1(1975);

function calcAge1(birthYear) {
    return 2024 - birthYear;
}




// function expression
// expressions produce values



const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const danAge2 = calcAge2(1975);
console.log(danAge1, danAge2);



//arrow functions were added it ES6

const calcAge3 = birthYear => 2024 - birthYear;

const danAge3 = calcAge3(1975);

console.log(danAge3);

const yearsUntilRetirement = (birthYear, firstName, retirementAge) => {
    const age = 2024 - birthYear;
    const retirement = retirementAge - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1975, 'Dan', 55));
console.log(yearsUntilRetirement(1976, 'Ann', 60));



function cutFruitPieces(fruit, pieces) {
    return fruit * 4;   
} 

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples, 4);
    const orangePieces = cutFruitPieces(oranges, 4);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.
You start with ${apples} apples and ${oranges} oranges.` 
    return juice;
}

console.log(fruitProcessor(3,4));

*/

const currentYear = new Date().getFullYear();

const calcAge = function(birthYear) {
    return currentYear - birthYear;
};
let age;
let firstName;
let retirementAge;

const yearsUntilRetirement = function ()  {
    const birthYear = document.getElementById('birthYear').value;
    firstName = document.getElementById('firstName').value;
    retirementAge = Number(document.getElementById('retirementAge').value);
    age = calcAge(birthYear)
    if (birthYear < currentYear && firstName && retirementAge > age) {
        const retirement = retirementAge - age;
        // return retirement;
        document.getElementById('resultRetire').innerText = `The current year is ${currentYear}.
        ${firstName} plans to retire in ${retirement} years, in ${currentYear + retirement}.`
    } else {
         document.getElementById('resultRetire').innerText = `Please enter correct data.`
    }
    return age, firstName, retirementAge;
};

// yearsUntilRetirement(1975, 'Dan', 55);

