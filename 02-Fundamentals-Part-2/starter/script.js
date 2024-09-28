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

*/
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

