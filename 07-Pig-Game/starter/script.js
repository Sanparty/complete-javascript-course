'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');
const newGameBtn = document.querySelector('.btn--new');
const diceRollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
// Starting condition
const scores = [0, 0];
// let score0 = 0;
// let score1 = 0;
let currentScore = 0;
// let currentScore0 = 0;
// let currentScore1 = 0;
score0El.textContent = scores[0];
score1El.textContent = scores[1];
diceEl.classList.add('hidden');
let activePlayer = 0;
const winningScore = 50;
const diceImage = function (diceNumber) {
  return `dice-${diceNumber}.png`;
};
const resetCurrent = function () {
  currentScore0 = 0;
  currentScore1 = 0;
  currentScore0El.textContent = currentScore0;
  currentScore1El.textContent = currentScore1;
};

const playerWins = function (player) {
  console.log(player);
  score0El.textContent = score0;
  score1El.textContent = score1;
  if (player === 0) {
    document.querySelector('#name--0').textContent = `PLayer 1 Wins!`;
    console.log('player 1 wins');
  } else {
    document.querySelector('#name--1').textContent = `PLayer 2 Wins!`;
    console.log('player 2 wins');
  }
  diceEl.classList.add('hidden');
  diceRollBtn.classList.add('hidden');
  holdBtn.classList.add('hidden');
};

const newGame = function () {
  resetCurrent();
  if (activePlayer === 1) {
    switchPlayer();
  }
  if (!diceEl.classList.contains('hidden')) {
    diceEl.classList.add('hidden');
  }
  diceRollBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
  document.querySelector('#name--0').textContent = `PLayer 1`;
  document.querySelector('#name--1').textContent = `PLayer 2`;
  score0 = 0;
  score1 = 0;
  score0El.textContent = score0;
  score1El.textContent = score1;
};

diceRollBtn.addEventListener('click', function () {
  const diceSelect = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${diceSelect}.png`;
  diceEl.classList.remove(`hidden`);
  if (diceSelect != 1) {
    currentScore += diceSelect;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});
holdBtn.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});
newGameBtn.addEventListener('click', newGame);

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Section.classList.toggle('player--active');
  player1Section.classList.toggle('player--active');
  currentScore = 0;
};
