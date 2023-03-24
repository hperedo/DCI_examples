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
 *  Submitting a form
 */

function submitForm(e) {
  e.preventDefault();
  console.log(e.srcElement[0].value);
  console.log(e.srcElement[1].value);
}

form.addEventListener('submit', submitForm);

form.addEventListener('reset', (e) => {
  e.preventDefault();
  console.log('Form reset button clicked');
});
