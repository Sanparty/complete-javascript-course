'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const diceRollBtn = document.querySelector('.btn--roll');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

// Starting condition
let score0 = 0;
let score1 = 0;
let currentScore0 = 0;
let currentScore1 = 0;
score0El.textContent = score0;
score1El.textContent = score1;
diceEl.classList.add('hidden');
let activePlayer = 0;

const diceImage = function (diceNumber) {
  return `dice-${diceNumber}.png`;
};

const switchPlayer = function () {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  console.log(activePlayer);
};

const addScore = function (diceSelect) {
  if (activePlayer === 0) {
    currentScore0 += diceSelect;
  } else {
    currentScore1 += diceSelect;
  }
  currentScore0El.textContent = currentScore0;
  currentScore1El.textContent = currentScore1;
};
const rollDice = function () {
  const diceSelect = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = diceImage(diceSelect);
  diceEl.classList.remove(`hidden`);
  if (diceSelect === 1) {
    switchPlayer();
  } else {
    addScore(diceSelect);
  }
  console.log(diceSelect);
};

diceRollBtn.addEventListener('click', rollDice);
