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

totalScore0.textContent = 0;
totalScore1.textContent = 0;
diceImage.classList.add('hidden');
let sumOfDiceNumbers = 0;

rollActionButton.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceImage.classList.remove('hidden');
  diceImage.src = `img/dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    sumOfDiceNumbers += diceNumber;
    currentScore0.textContent = sumOfDiceNumbers;
  } else {
    currentScore0.textContent = 0;
    playerSections[0].classList.remove('player--active');
    playerSections[1].classList.add('player--active');
  }
});
