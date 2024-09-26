/*
let js = 'amazing';
console.log(40 + 0 + 23 - 10 + ' ' + js);

console.log("Jonas");
console.log(23);

let firstName = 'Dan';
let lastName = 'San Pedro';
let wholeName = firstName + ' ' + lastName;

function changeName() {
    let newName = document.getElementById('newName').value
    if (newName) {
        document.getElementById('name').innerText = newName;
        console.log(newName);
        console.log(newName);
        console.log(newName);
    } else {
        alert('Enter a name please!')
    }
    
}


let javascriptIsFun = true;
console.log(typeof true);

console.log(typeof javascriptIsFun);

console.log(typeof 32);

console.log(typeof 'Dan')

javascriptIsFun = 'dan';

console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 1991

console.log(year);
console.log(typeof year);

console.log(typeof null)

let age = 30;

age = 31;

const birthYear = 1975

// birthYear = 1990

// const job;

var job = 'editor';

job = 'developer'

lastName = "San Pedro";
console.log(lastName)

// math operators
const currentYear = 2040

const ageDan = currentYear - 1975;
const ageAnn = currentYear - 1976;
console.log(ageDan, ageAnn);

console.log(ageDan * 2, ageDan / 2, ageDan % 2, 2 ** 3);

const firstName = 'Dan';
const lastName = 'San Pedro';

console.log(firstName + ' ' + lastName)

// assignment operators
let x = 10 + 5; // 15
x += 10 // x = x + 10
x -= 10 // x = x - 10
x *= 3 // x * 3
x /= 5
x++ // x = x + 1 
x-- // x = x - 1
console.log(x)

// comparison operators

console.log(ageDan > ageAnn)
console.log(ageAnn >= 21)

const isFullAge = ageSarah >= 21;


const currentYear = 2024

const ageDan = currentYear - 1975;
const ageAnn = currentYear - 1976;

console.log(currentYear - 1975 > currentYear - 1976)


let x, y;

x = y = 25 - 10 - 5 // x = y = 10, x = 10

console.log(x, y)

const averageAge = (ageAnn + ageDan) / 2

console.log('the average age is ' + averageAge)

console.log(ageAnn, ageDan);


const firstName = 'Dan';
const job = 'video editor';
const birthYear = "1975";
const year = 2024;
const home = 'Mississauga'

const dan = "I'm " + firstName + ', a ' + (year - birthYear) + ' year-old ' + job + ' from ' + home + '!'

console.log(dan);

const danNew = `I'm ${firstName}, a ${year - birthYear} year-old ${job} from ${home}!`;

console.log(danNew);
console.log(typeof danNew);
console.log(`hello`);

console.log('String with\n\a line space\n\and another')

console.log(`this has
multiple lines
in this sentence`)



const yearsLeft = 0;
const ageLicense = 17;

const dan = {
    name: 'Dan',
    age: 49,
}
const lincoln = {
    name: 'Lincoln',
    age: 1
}
const ann = {
    name: 'Ann',
    age: 48
}


function oldEnough (person) {   
    if (person.age >= ageLicense) {
        console.log(`${person.name} is old enough to drive.`)
    } else {
        const yearsLeft = ageLicense - person.age
        console.log(`${person.name} has to wait ${yearsLeft} years to drive`);
    } 
}


oldEnough (dan);
oldEnough (lincoln);
oldEnough (ann)


const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}

console.log(century);


// type conversion
const inputYear = '2024';


console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);

console.log(Number('dan'));
console.log(typeof Number('dan'))

console.log(String(23), 23);

const stringYear = String(2024);

console.log(stringYear)

// type coercion

console.log('I am ' + 34 + ' years old')

console.log('23' - '10' - 3);

console.log('23' + '10' + 3);

console.log('23' * '2');

let n = '1' + 1;
// n = '11'
n = n - 1;
// n = 10
console.log(n);
// 10



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Dan'));
console.log(Boolean({})
console.log(Boolean(''))

const money = 100;

if (money) {
    console.log("Don't spend it all :)")
} else {
    console.log("You should get a job!")
}

let height = 2;

if (height) {
    console.log('Yay! height is defined');
} else {
    console.log('Height is undefined!');
}



const age = '18';

if (age === 18) console.log('You just became an adult! strict');

if (age == 18) console.log('You just became an adult! loose');

const favourite = Number(prompt("What's your favourite number?"));


console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?');




const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision)


console.log(hasDriversLicense || hasGoodVision)

console.log(!hasDriversLicense)


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive!')
// }

const isTired = false; // C

console.log(hasDriversLicense || hasGoodVision || isTired)


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive!')
}

*/

// const day = 'monday';

function capitalizFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// switch (day) {
//     case 'monday':
//         console.log(`On ${capitalizFirstLetter(day)}, I work in the office.`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`On ${capitalizFirstLetter(day)}, I work in the office.`);
//         break;
//     case 'wednesday':
//         console.log(`On ${capitalizFirstLetter(day)}, I work in the office half-day`)
//         break;
//     case 'thursday':
//     case 'friday':
//         console.log(`On ${capitalizFirstLetter(day)}, I work at home`)
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`On ${capitalizFirstLetter(day)}, I enjoy the weekend`)
//         break;
//     default:
//         console.log(`${day} is not a valid day!`)
// };

function daySchedule(day) {
    if (day === 'monday') {
        console.log(`On ${capitalizFirstLetter(day)}, I work in the office.`);
        console.log(`Go to coding meetup`);
    } else if (day === 'tuesday') {
        console.log(`On ${capitalizFirstLetter(day)}, I work in the office.`);
    } else if (day === 'wednesday') {
        console.log(`On ${capitalizFirstLetter(day)}, I work in the office half-day`);
    } else if (day === 'thursday' || 'friday') {
        console.log(`On ${capitalizFirstLetter(day)}, I work at home`);
    } else if (day === 'saturday' || 'sunday') {
        console.log(`On ${capitalizFirstLetter(day)}, I enjoy the weekend`);
    } else {
        console.log(`${day} is not a valid day!`);
    } 
};
let daySelected = '';
function pickDay() {
    daySelected = document.getElementById('newName').value;
    daySchedule(daySelected)
    daySelected = ''
}
