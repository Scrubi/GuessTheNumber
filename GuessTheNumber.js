var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses = new Array();
  }
  guesses.indexOf(userGuess) === -1
    ? guesses.push(userGuess)
    : alert("You already guessed that number, please give a new number.");

  var x = guesses.toString();
  document.getElementById("demo").innerHTML = x;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (userGuess > 100 || userGuess < 1) {
    lastResult.textContent =
      "Your number was invalid, please input between 1-100!";
    lastResult.style.backgroundColor = "red";
  } else if (guessCount === 10) {
    lastResult.textContent = "Game Over!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber && userGuess > 0) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber && userGuess < 101) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guesses = new Array();
  var x = guesses.toString();
  document.getElementById("demo").innerHTML = x;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
