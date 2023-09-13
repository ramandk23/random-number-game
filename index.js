let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
// Validateif value is between t and 100
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Number Greater Than 1');
  } else if (guess < 1) {
    alert('Please Enter a Number Greater Than 1');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuesses(guess);
    }
  }
}

// whether tha value is equal to the random number
function checkGuesses(guess) {
  if (guess == randomNum) {
    displayMessage(`You Guessed it Right :) !`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Entered Number is Low From The Guess`);
  } else if (guess > randomNum) {
    displayMessage(`Entered Number is Higher Than The Guess`);
  }
}

// In below function Clean the values and guess arrays will be updated, guess remaining will be updated
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// Message will be printed
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// When game end, below function will do the cleanup
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start New Game!</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    displayMessage('');
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
