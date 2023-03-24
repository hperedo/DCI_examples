function getRandomArbitrary(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min) + min);
}

function guessingGame() {
  const numberToGuess = getRandomArbitrary();
  let guess = parseInt(prompt('Guess a number 1-10'));
  console.log(numberToGuess);

  let count = 1;
  while (guess !== numberToGuess && count < 3) {
    guess = parseInt(prompt('Wrong. Try again.'));
    count++;
  }

  if (guess === numberToGuess) {
    alert(`Success, the number was ${numberToGuess}! Attempts: ${count}`);
  } else {
    alert(
      `Sorry, you failed to guess the number in three attempts. The number was ${numberToGuess}!`
    );
  }
}

guessingGame();
