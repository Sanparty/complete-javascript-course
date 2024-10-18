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

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // this is a state variable

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // When there is no input
    document.querySelector('.message').textContent = '⛔️ No Number entered!';
  } else if (guess < 1 || guess > 20) {
    // When the guess is not between 1 an 20
    document.querySelector('.message').textContent =
      'Choose a number between 1 and 20';
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.check').style.display = 'none';
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').style.display = 'none';
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').style.display = 'none';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').style.display = 'block';
});
