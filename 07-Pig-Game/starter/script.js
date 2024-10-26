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
const winningScoreEl = document.querySelector('.winningScore');
// Starting condition
let scores, currentScore, activePlayer, isGamePlaying, winningScore;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  winningScore = prompt('Please enter the winning score');
  if (winningScore) {
    isGamePlaying = true;
    winningScoreEl.textContent = `🏆 Winning Score: ${winningScore}`;
  } else {
    winningScoreEl.textContent = `You need to enter a winning score. Press New Game again`;
  }
  
  winningScoreEl.classList.remove('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0Section.classList.remove('player--winner');
  player1Section.classList.remove('player--winner');
  player0Section.classList.add('player--active');
  player1Section.classList.remove('player--active');
};
init();


const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Section.classList.toggle('player--active');
  player1Section.classList.toggle('player--active');
  currentScore = 0;
};
diceRollBtn.addEventListener('click', function () {
  if (isGamePlaying) {
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
  }
});

holdBtn.addEventListener('click', function () {
  if (isGamePlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= winningScore) {
      isGamePlaying = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', init);
