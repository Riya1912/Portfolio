const startButton = document.getElementById('start');
const backButton = document.getElementById('back');
const page1 = document.getElementById('page1');
const gamestart = document.getElementById('gamestart');
const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup-close');
const popupMessage = document.getElementById('popup-message');
const body = document.body;
let flippedCard = false;
let lockedCards = false;
let firstCard, secondCard;
let moves = 0;
let matches = 0;

const images = [
    'eye close.png',
    'eye heart.png',
    'thinking.png',
    'eye heart.png',
    'thinking.png',
    'eye close.png',
];

function flipCard() {
  if (lockedCards) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  if (isMatch) {
    disableCards();
    matches++;
    if (matches === cards.length / 2) {
      endGame();
    }
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockedCards = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [flippedCard, lockedCards] = [false, false];
  [firstCard, secondCard] = [null, null];
  moves++;
  document.getElementById('moves').textContent = moves;
}

function startGame() {
  page1.style.display = 'none';
  gamestart.style.display = 'block';
  resetBoard(); 
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });
  matches = 0;
  moves = 0;
  document.getElementById('moves').textContent = moves;
  shuffleCards();
}

// Function to shuffle cards
function shuffleCards() {
  cards.forEach((card, index) => {
    card.style.order = Math.floor(Math.random() * cards.length);
    const backView = card.querySelector('.backview img');
    backView.src = images[index];
  });
}

// popup box for winning 
function endGame() {
  popup.style.display = 'block';
  gamestart.style.display = 'none';
  popupMessage.textContent = `You won the game with ${moves} moves!`;
  body.classList.add('body-background-change');
}

function resetGame() {
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });
  moves = 0;
  matches = 0;
  document.getElementById('moves').textContent = moves;
  page1.style.display = 'block';
  gamestart.style.display = 'none';
  popup.style.display = 'none';
  body.classList.remove('body-background-change');
}

startButton.addEventListener('click', startGame);
backButton.addEventListener('click', resetGame);
popupClose.addEventListener('click', resetGame);
cards.forEach(card => card.addEventListener('click', flipCard));

