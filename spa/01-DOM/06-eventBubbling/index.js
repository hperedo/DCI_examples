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
 * Event bubbling
 */

function deleteItem(e) {
  //   console.log(e);
  if (e.target.classList.contains('delete')) {
    e.target.parentNode.remove();
  }
}

const list = document.querySelector('.list');
// console.log(list);
list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.flexDirection = 'column';
list.style.gap = '10px';

// const deleteButton1 = document.querySelector('#one');
// deleteButton1.addEventListener('click', deleteItem);

// const deleteButton2 = document.querySelector('#two');
// deleteButton2.addEventListener('click', deleteItem);

// const deleteButton3 = document.querySelector('#three');
// deleteButton3.addEventListener('click', deleteItem);

list.addEventListener('click', deleteItem);

/**
 *  Prevent event bubbling
 */

function parentEventHandler(e) {
  console.log('Parent Event');
}

function childEventHandler(e) {
  console.log('Child Event');
  e.stopPropagation();
}

const parent = document.querySelector('.parent');
parent.addEventListener('click', parentEventHandler);

const child = document.querySelector('.child');
child.addEventListener('click', childEventHandler);
