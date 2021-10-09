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
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

    // Disable input
    guessInput.disabled = true;

    // change border color
    guessInput.style.border = "2px solid green";

    setMessage(`${winningNum} is correct!`, "teal");
  } else {
    // Lose Case
    gameOver(false, `YOU LOSE!`);

    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Gameover - lost
      // // Disable input
      // guessInput.disabled = true;
      // // change border color
      // guessInput.style.border = "2px solid orange";
      // setMessage(
      //   `Game Over, You Lost. The Correct Number was ${winningNum}`,
      //   "red"
      // );
    } else {
      // Tell user it's the wrong number
      guessInput.style.border = "2px solid orange";

      // Clear Input
      guessInput.value = " ";

      // Game continues - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "teal") : (color = "yellow");

  // Disable input
  guessInput.disabled = true;

  // change border color
  guessInput.style.border = color;

  setMessage(msg);
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
