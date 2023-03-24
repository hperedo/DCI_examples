// Returns a random quote.
function getRandomQuote() {
  const quotes = [
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    "Don't watch the clock; do what it does. Keep going.",
    'The secret of getting ahead is getting started.',
    'Well done is better than well said.',
    'You miss 100% of the shots you don’t take.',
    'A goal is a dream with a deadline.',
    'Outstanding people have one thing in common: An absolute sense of mission.',
    'Trying is winning in the moment.',
    'Fall down seven times and stand up eight.',
    "You just can't beat the person who never gives up.",
    'There is little success where there is little laughter.',
    'We cannot solve our problems with the same thinking we used when we created them.',
  ];

  return getRandomArrayItem(quotes);
}

// Returns a random element from an array.
function getRandomArrayItem(array) {
  let itemIndex = getRandomInt(0, array.length - 1);
  return array[itemIndex];
}

// Returns a random integer in the range defined by "min" and "max".
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gets a random quote and update the "#quote" element.
function updateQuote() {
  document.querySelector('#quote').textContent = getRandomQuote();
}

// Registers all events of the application.
function registerEvents() {
  document.querySelector('button').addEventListener('click', () => {
    updateQuote();
  });
}

/**
 * Initializes the application by loading a first random quote
 * and calling the event registration function.
 */
function init() {
  // Load a random quote, as soon as JS is executed
  updateQuote();

  // Register the click event for the button
  registerEvents();
}

// Call the initialization function
init();
