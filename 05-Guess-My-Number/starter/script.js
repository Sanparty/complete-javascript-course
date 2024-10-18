'use strict';

/*
 console.log(document.querySelector('.message').textContent);

 document.querySelector('.message').textContent = 'Correct Number!';

//  document.querySelector('.number').textContent = '17';

 document.querySelector('.number').textContent = 13;

 document.querySelector('.score').textContent = 10;

 document.querySelector('.guess').value = 23;
 console.log(document.querySelector('.guess').value); 

*/

let highNumber = 20;
let secretNumber = 0;
const displayHighNumber = function () {
  document.querySelector(
    '.between'
  ).textContent = `(Between 1 and ${highNumber})`;
};
const getSecretNumber = function (highNumber) {
  secretNumber = Math.trunc(Math.random() * highNumber) + 1;
};

getSecretNumber(highNumber);
displayHighNumber();

let score = 20; // this is a state variable

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number entered!');
    // When the guess is not between 1 and the highNumber
  } else if (guess < 1 || guess > highNumber) {
    displayMessage(`Choose a number between 1 and ${highNumber}`);
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.check').style.display = 'none';
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!💥');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').style.display = 'none';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  getSecretNumber(highNumber);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').style.display = 'block';
});
