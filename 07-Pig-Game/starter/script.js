'use strict';

const playerOne = {
  elem: document.querySelector('.player--0'),
  score: document.querySelector('#score--0'),
  curr: document.querySelector('#current--0'),
};

const playerTwo = {
  elem: document.querySelector('.player--1'),
  score: document.querySelector('#score--1'),
  curr: document.querySelector('#current--1'),
};

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let activePlayer = playerOne;
let inactivePlayer = playerTwo;

function switchPlayers() {
  [activePlayer, inactivePlayer] = [inactivePlayer, activePlayer];
  activePlayer.elem.classList.add('player--active');
  inactivePlayer.elem.classList.remove('player--active');
}

function clearCurrent() {
  activePlayer.curr.textContent = 0;
}

function updateCurrent(random) {
  activePlayer.curr.textContent =
    Number(activePlayer.curr.textContent) + random;
}

function hold() {
  activePlayer.score.textContent =
    Number(activePlayer.score.textContent) +
    Number(activePlayer.curr.textContent);
  activePlayer.curr.textContent = 0;
  dice.src = 'dice-1.png';
  switchPlayers();
}

function play() {
  const random = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${random}.png`;
  updateCurrent(random);
  if (random === 1) {
    clearCurrent();
    switchPlayers();
  }
  return random;
}

function clearAll() {
  playerOne.score.textContent = 0;
  playerOne.curr.textContent = 0;
  playerTwo.score.textContent = 0;
  playerTwo.curr.textContent = 0;
}

rollDice.addEventListener('click', play);
holdScore.addEventListener('click', hold);
newGame.addEventListener('click', clearAll);
