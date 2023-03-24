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

/**
 *  Removing eventListener
 */

function eventHandler() {
  special.classList.toggle('special-style');
  special.removeEventListener('click', eventHandler);
}

const special = document.querySelector('.special');
special.style.marginTop = '20px';

special.addEventListener('click', eventHandler);
