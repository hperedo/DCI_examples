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
 *  Events
 */

// Modern websites are reactive - something will trigger something else
// There are two main types of events - User events and Browser events

/// User Events ///
// Pressing a button
// Submitting a form
// Moving the mouse
// Resizing browser window

/// Browser Events ///
// Page content finished loading
// Javascript code errors

// We can listen to these events and do something when it occurs
// To listen to an event, we need an event listener

/**
 *  Mouse events
 */

function eventHandler(e) {
  /**
   * e stands for event object
   */
  //   console.log('I am called');
  //   console.log(e.offsetX, e.offsetY);
  //   button.style.backgroundColor = 'orange';
  // button.classList.toggle('button-style');
  //   main.style.backgroundColor = 'blue';
  const div = document.querySelector('.err-message');
  // div.innerText = 'Invalid Input';
  // div.innerHTML = '<p>Invalid Input</p>';

  //   p.style.color = 'red';
  //   console.log(e.type);
  //   if (e.type === 'mouseenter') {
  //     area.style.backgroundColor = 'orange';
  //   }
  //   if (e.type === 'mouseleave') {
  //     area.style.backgroundColor = 'tomato';
  //   }
  //   if (e.type === 'click') {
  //     button.classList.toggle('button-style');
  //   }
  //   mouseP.innerText = `X:${e.offsetX}, Y:${e.offsetY}`;
  //   if (e.type === 'click') {
  //     let dot = document.createElement('div');
  //     dot.className = 'dot';
  //     dot.style.left = `${e.offsetX}px`;
  //     dot.style.top = `${e.offsetY}px`;
  //     area.append(dot);
  //   }
}

const button = document.querySelector('button');
button.style.cursor = 'pointer';

// click
button.addEventListener('click', eventHandler);
// button.addEventListener('dblclick', eventHandler);

// mouse enter
// const area = document.querySelector('.area');
// area.style.width = '300px';
// area.style.height = '200px';
// area.style.cursor = 'pointer';
// area.style.backgroundColor = 'orange';
// area.style.position = 'relative';

// area.addEventListener('mouseenter', eventHandler);

// // mouse leave
// area.addEventListener('mouseleave', eventHandler);

// // mouse move
// const mouseP = document.querySelector('.mouse-position');
// area.addEventListener('mousemove', eventHandler);

// area.addEventListener('click', eventHandler);

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
