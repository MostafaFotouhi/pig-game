'use strict';

const newGameButton = document.querySelector('.btn--new');
const rollActionButton = document.querySelector('.btn--roll');
const holdActionButton = document.querySelector('.btn--hold');

const diceImage = document.querySelector('.dice');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const totalScore0 = document.getElementById('score--0');
const totalScore1 = document.getElementById('score--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const playerSections = document.querySelectorAll('section');

let totalScores, sumOfDiceNumbers, activePlaying, activePlayer;

/// Initialization
const init = function () {
  totalScores = [0, 0];
  sumOfDiceNumbers = 0;
  activePlaying = true;
  activePlayer = 0;

  totalScore0.textContent = 0;
  totalScore1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceImage.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

// Switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  sumOfDiceNumbers = 0;
  playerSections[0].classList.toggle('player--active');
  playerSections[1].classList.toggle('player--active');
};

rollActionButton.addEventListener('click', function () {
  if (activePlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `img/dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      sumOfDiceNumbers += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        sumOfDiceNumbers;
    } else {
      switchPlayer();
    }
  }
});

holdActionButton.addEventListener('click', function () {
  if (activePlaying) {
    totalScores[activePlayer] += sumOfDiceNumbers;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    if (totalScores[activePlayer] >= 100) {
      activePlaying = false;
      diceImage.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayer();
    }
  }
});

newGameButton.addEventListener('click', init);
