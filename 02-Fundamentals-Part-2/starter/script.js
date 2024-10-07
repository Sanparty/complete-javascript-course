'use strict';





 /*


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





// yearsUntilRetirement(1975, 'Dan', 55);


// const calcAge = function(birthYear) {
//     return 2024 -birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName, retirementAge)  {
//     const age = calcAge(birthYear);
//     const retirement = retirementAge - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }

   
//  `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1975, 'Dan', 55))
// console.log(yearsUntilRetirement(1946, 'Ann', 60))
// console.log(yearsUntilRetirement(2000, 'Nick', 65))

// const danRetire = yearsUntilRetirement(1975,'Dan', 65);

// console.log(danRetire);

// two most important data structures - arrays and objects
/*
const friend1 = 'Michael';
const friend2 = 'Dan';
const frined3 = 'Ann';

// literal syntax
const friends = ['Michael', 'Dan', 'Ann'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

// only primitive values are immutable but an Array is not primitive
friends[2] = 'Jake';

console.log(friends);

const firstName = 'Dan';

const dan = [firstName, 'San Pedro', 2024 - 1975, 'Mississauga', 'Video Editor', friends];

console.log(dan);
console.log(dan.length);

console.log(dan[5]);


const calcAge2 = function(birthYear) {
    return 2024 - birthYear;
}

const y = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge2(y[0]);

const age2 = calcAge2(y[1]);

const age3 = calcAge2(y[y.length -1]);

console.log(age1,age2,age3);

const ages =[ calcAge2(y[0]),calcAge2(y[1]),calcAge2(y[y.length -1])];

console.log(ages);


// add elements
const friends = ['Michael', 'Dan', 'Ann'];
const newLength = friends.push('Janice');

console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements 

const popped = friends.pop() // remove last element of array

console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Ann'));

friends.push(23);


console.log(friends.includes('Dan'));
console.log(friends.includes('Bob'));

console.log(friends.includes(23));

if (friends.includes('Dan')) {
    console.log(`You have a friend called Dan!`)
}




// objects - define key value pairs
// order does not matter to retrieve them

const dan = {
    firstName: 'Dan',
    lastName: 'San Pedro',
    age: 2024 - 1975,
    job: 'Video Editor',
    friends: ['Gord', 'Dan Kwan', 'Ann']
};

console.log(dan);

console.log(dan.lastName);

console.log(dan['lastName']);

const nameKey = 'Name';

console.log(dan['first' + nameKey]);
console.log(dan['last' + nameKey]);

 
const answer = prompt('What do you want to know about Dan? Choose between firstName, lastName, age, job, and friends');



if (dan[answer]) {
    console.log(dan[answer]);
} else {
    console.log(`you didn't choose a correct request. Choose between firstName, lastName, age, job, and friends`)
}

dan.location = 'Mississauga'
dan[`twitter`] = '@sanparty'

console.log(dan);

//Challenge
// "Dan has 3 friends, and his best friend is called Ann."

const challenge = `${dan.firstName} has ${dan.friends.length} friends, and his best friend is called ${dan.friends[2]}.`

console.log(challenge);



// console.log(dan.calcAge());

// console.log(dan.age);
// console.log(dan.age);
// console.log(dan.age);
// console.log(dan.summary());
// console.log(ann.summary());
// console.log(dan['calcAge'](1975));


// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');


// for loop will run while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// };


const danArray = [
    'Dan',
    'Sam Pedro',
    2024 - 1975,
    'video editor',
    ['Ann', 'Dan Kwan', 'Gord'],
    true
];

const types = [];

for (let i = 0; i < danArray.length; i++) {
    // reading from array
    console.log(danArray[i], typeof danArray[i]);

    //filling types array
    // types[i] = typeof danArray[i];

    types.push(typeof danArray[i]); 
 }

console.log(types);

const years = [ 1991, 2007, 1969, 2020];

const ages = [];

const calcAge2 = function(birthYear) {
    return 2024 - birthYear;
}

// for (let i = 0; i < years.length; i++) {
//     ages.push(calcAge(years[i]));
//     console.log(ages[i] + '-years old');
// }

for (let i = 0; i < years.length; i++) {
    ages.push(calcAge(years[i]));
    console.log(ages[i] + ' years old');
}

console.log(ages);

// continue and break;
console.log('----only strings');
for (let i = 0; i < danArray.length; i++) {
    if (typeof danArray[i] !== 'string') continue;

    console.log(danArray[i], typeof danArray[i]);
 };

// break terminates the loop
console.log('---break with number');
for (let i = 0; i < danArray.length; i++) {
    if (typeof danArray[i] === 'number') break;

    console.log(danArray[i], typeof danArray[i]);
 };



 // looping backwards through arrays;

 const danArray2 = [
    'Dan',
    'Sam Pedro',
    2024 - 1975,
    'video editor',
    ['Ann', 'Dan Kwan', 'Gord'],
    true
];


for (let i = danArray2.length - 1; i >= 0; i--) {
    console.log(i, danArray2[i]);
}



for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----  Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    };
}

// for (let rep = 1; rep <= 10; rep++) {
//         console.log(`Lifting weights repetition ${rep}`);
//     };

const exercises = [ 'push-ups', 'jumping jacks', 'burpies'];


for (let i = 0; i < exercises.length; i++) {
    console.log(`----  Starting exercise ${exercises[i]}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`${exercises[i]}: Repetition ${rep}`);
    };
}



for (let rep = 1; rep <= 10; rep++) {
        console.log(`Lifting weights repetition ${rep}`);
    };
*/

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`)
} 