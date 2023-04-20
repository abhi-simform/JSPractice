'use strict';

let myNumber = Math.floor(Math.random() * 20);
const theNumber = document.querySelector('.number');
const again = document.querySelector('.again');
const inputValue = document.querySelector('.guess');
const check = document.querySelector('.check');
const result = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

again.addEventListener('click', () => {
  body.style.backgroundColor = '#222';
  myNumber = Math.floor(Math.random() * 20);
  result.textContent = 'Start guessing...';
  score.textContent = '20';
  theNumber.textContent = '?';
});

function updateScore(score, scoreElem) {
  score = score - 1;
  scoreElem.textContent = score;
}

function updateHighScore(score, scoreElem) {
  if (score > Number(highScore.textContent)) {
    scoreElem.textContent = score;
  }
}

check.addEventListener('click', () => {
  if (inputValue.valueAsNumber > myNumber) {
    result.textContent = 'Too high...';
    updateScore(Number(score.textContent), score);
  } else if (inputValue.valueAsNumber < myNumber) {
    result.textContent = 'Too low...';
    updateScore(Number(score.textContent), score);
  } else if (inputValue.valueAsNumber === myNumber) {
    result.textContent = 'You win...';
    updateHighScore(Number(score.textContent), highScore);
    body.style.backgroundColor = '#60b347';
    theNumber.textContent = score;
  } else {
    result.textContent = 'Please enter a valid number...';
  }
});
