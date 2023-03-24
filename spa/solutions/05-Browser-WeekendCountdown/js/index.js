// Date Global Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const date = new Date();

getDayName = () => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  return date.toLocaleDateString('en-EN', { weekday: 'long' });
};

getDaysToWeekend = () => {
  const userName = document.querySelector('#username');
  const answer = document.querySelector('#answer');

  if (userName.value === '') {
    alert('please write your name');
    return;
  }

  answer.innerText = `Hello ${userName.value}. Today is ${getDayName()}, only ${
    5 - date.getDay()
  } days left until next weekend!`;
};

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const goBtn = document.querySelector('#go-btn');
goBtn.addEventListener('click', getDaysToWeekend);
