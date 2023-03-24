const body = document.querySelector('body');
body.style.boxSizing = 'border-box';
body.style.padding = '0px';
body.style.margin = '0px';

const main = document.querySelector('main');
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
main.style.backgroundColor = 'pink';
main.style.minHeight = '100vh';

const form = document.querySelector('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '10px';

/**
 *  Keyboard events
 */

function keyEventHandler(e) {
  //   console.log(e);
  //   console.log(e.code);
  //   if (e.shiftKey) {
  //     if (e.code === 'Digit7') {
  //       console.log('&');
  //     }
  //   }
  console.log(e.target.value);
}

const emailElement = document.querySelector(`input[type='email']`);
const passwordElement = document.querySelector(`input[type='password']`);

// // key down
// emailElement.addEventListener('input', keyEventHandler);

// // key up
// emailElement.addEventListener('keyup', keyEventHandler);

// // input
emailElement.addEventListener('input', keyEventHandler);
passwordElement.addEventListener('input', keyEventHandler);
