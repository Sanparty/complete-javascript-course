function calcAge3(holder) {
    const age =  2024 - holder;
    console.log(age);
    return age;
};

function summary2(person) {
    let pronoun = ''
        switch (person.sex) {
           case 'male':
            pronoun = 'he';
            break;
           case 'female':
            pronoun = 'she';
            break;
            case 'none':
            pronoun = `${person.firstName}`;
            break;
            default:
            pronoun = ''
        }
        return `${person.firstName} ${person.lastName} is a ${person.calcAge()}-year old ${person.job}, and ${person.hasDriversLicense ? `${pronoun} has a driver's license` : `${pronoun} does not have a driver's license`}`
        }
;




const dan = {
    firstName: 'Dan',
    lastName: 'San Pedro',
    birthYear: 1975,
    sex: 'male',
    job: 'Video Editor',
    friends: ['Gord', 'Dan Kwan', 'Ann'],
    hasDriversLicense: true,
    // calcAge: function(birthYear) {
    //     return 2024 - birthYear
    // },
    // calcAge: function() {
    //     // console.log(this);
    //     return 2024 - this.birthYear;
    // },
    calcAge: function() {
        return calcAge3(this.birthYear);
    },
    summary: function() {
        return summary2(this);
        }
};

const ann = {
    firstName: 'Ann',
    lastName: 'Nakajima',
    birthYear: 1976,
    sex: 'female',
    job: 'Naturopathic Doctor',
    friends: ['Dan', 'Paula', 'Lois'],
    hasDriversLicense: false,
    calcAge: function() {
        return calcAge3(this.birthYear);
    },
    summary: function() {
        return summary2(this);
        }
};

const nick = {
    firstName: 'Nick',
    lastName: 'Manucdoc',
    birthYear: 2000,
    sex: 'none',
    job: 'Environmental Associate',
    friends: ['Jasmine', 'Rany', 'Theresa'],
    hasDriversLicense: true,
    calcAge: function () {
        return calcAge3(this.birthYear);
    },
    calcAge: function() {
        return calcAge3(this.birthYear);
    },
    summary: function() {
        return summary2(this);
        }
};

const jake = {
    firstName: 'Jake',
    lastName: 'Manucdoc',
    birthYear: 2002,
    sex: 'male',
    job: 'Piano Teacher',
    friends: ['Mya', 'Rany', 'Theresa'],
    hasDriversLicense: true,
    calcAge: function () {
        return calcAge3(this.birthYear);
    },
    calcAge: function() {
        return calcAge3(this.birthYear);
    },
    summary: function() {
        return summary2(this);
        }
};

const people = [ dan, ann, nick, jake ]

for (let i = 0; i < people.length; i++) {
    const newPar = document.createElement("div");
    const nameHeading = document.createElement("h2");   
    nameHeading.innerText = people[i].firstName + ' ' + people[i].lastName;
    const parInfo = document.createElement('p');
    parInfo.innerText = people[i].summary();
    newPar.append(nameHeading);
    newPar.append(parInfo);
    document.getElementById("loopGoesHere").append(newPar);
}



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


const currentYear = new Date().getFullYear();

const calcAge = function(birthYear) {
    return currentYear - birthYear;
};
let age;
let firstName;
let retirementAge;



// Dan retirement age chooser
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

// calc highest value in array

const values = [ 25, 50, 15, 5, 20, 100, 45, 50];


const values2 = [ 25, 500, 15, 5, 20, 100, 45, 50, 2, 640];

// const calcHighest = function(arr) {
//     let highest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         let nextValue = arr [i + 1];
//         if (nextValue) {
//             if (nextValue > highest) {
//                 highest = nextValue
//             }
//         }
//     }
//     return highest
// }

// console.log('highest value is ' + calcHighest(values))

const calcHighAndLow = function(arr) {
    let highest = arr[0];
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let nextValue = arr [i + 1];
        if (nextValue) {
            if (nextValue > highest) {
                highest = nextValue
            } else {
                lowest = nextValue
            }
        }
    }
    const valueResults = [ highest, lowest ]
    return valueResults
};

console.log(calcHighAndLow(values));

const highLow = calcHighAndLow(values);

console.log(`The highest value is ${highLow[0]} and the lowest value is ${highLow[1]}.`)

const highLow2 = calcHighAndLow(values2);

console.log(`The highest value is ${highLow2[0]} and the lowest value is ${highLow2[1]}.`)