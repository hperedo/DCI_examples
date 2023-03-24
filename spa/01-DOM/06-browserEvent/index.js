/**
 *  Browser event
 */

function afterDomEvent() {
  function eventHandler(e) {
    e.preventDefault();
    button.classList.toggle('special-style');
  }

  const button = document.querySelector(`button[type='submit']`);
  button.addEventListener('click', eventHandler);
}
// DOM content loaded event
document.addEventListener('DOMContentLoaded', afterDomEvent);
