'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const diceRollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');
// Starting condition
let score0 = 0;
let score1 = 0;
let currentScore0 = 0;
let currentScore1 = 0;
score0El.textContent = score0;
score1El.textContent = score1;
diceEl.classList.add('hidden');
let activePlayer = 0;
const winningScore = 10;
const diceImage = function (diceNumber) {
  return `dice-${diceNumber}.png`;
};
const resetCurrent = function () {
  currentScore0 = 0;
  currentScore1 = 0;
};
const switchPlayer = function () {
  if (activePlayer === 0) {
    activePlayer = 1;
    player0Section.classList.remove('player--active');
    player1Section.classList.add('player--active');
  } else {
    activePlayer = 0;
    player1Section.classList.remove('player--active');
    player0Section.classList.add('player--active');
  }
  // console.log(activePlayer);
};

const addCurrentScore = function (diceSelect) {
  if (activePlayer === 0) {
    currentScore0 += diceSelect;
  } else {
    currentScore1 += diceSelect;
  }
  currentScore0El.textContent = currentScore0;
  currentScore1El.textContent = currentScore1;
};

const addTotalScore = function () {
  if (activePlayer === 0) {
    score0 += currentScore0;
    if (score0 >= winningScore) {
      playerWins(activePlayer);
    }
  } else {
    score1 += currentScore1;
    if (score1 >= winningScore) {
      playerWins(activePlayer);
    }
  }
  resetCurrent();
  switchPlayer();
  score0El.textContent = score0;
  score1El.textContent = score1;
};

const rollDice = function () {
  const diceSelect = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = diceImage(diceSelect);
  diceEl.classList.remove(`hidden`);
  if (diceSelect === 1) {
    resetCurrent();
    switchPlayer();
  } else {
    addCurrentScore(diceSelect);
  }
  // console.log(diceSelect);
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
};
const hold = function () {
  addTotalScore();
};

diceRollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
