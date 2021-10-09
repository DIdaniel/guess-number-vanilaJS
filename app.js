// Game values
let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

// UI elems
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

// Assing UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Plz Enter a number between ${min} and ${max}`, "tomato");
  }

  // check if won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;

    // change border color
    guessInput.style.border = "2px solid green";

    setMessage(`${winningNum} is correct!`, "teal");
  } else {
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
