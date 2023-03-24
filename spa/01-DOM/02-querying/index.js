/**
 * Querying
 */

const body = document.querySelector('body');
body.style.backgroundColor = 'pink';
body.style.fontFamily = 'Arial';

const main = document.querySelector('main');
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';

const heading = document.querySelector('.heading');
heading.style.color = 'blue';

// const desc = document.getElementById('desc');
const desc = document.querySelector('#desc');
desc.style.fontSize = '1.5rem';
desc.style.borderBottom = '2px solid blue';
desc.style.fontStyle = 'italic';

const items = document.querySelectorAll('.item');
// console.log(items);
// items[0].style.color = 'red';
// items[1].style.color = 'red';
// items[2].style.color = 'red';

// items.forEach((item) => {
//     item.style.color = 'red';
//   });

items.forEach(({ style: item }) => {
  item.color = 'red';
  item.listStyle = 'none';
  item.marginBottom = '1rem';
  item.fontSize = '1.3rem';
});

const lastItem = document.querySelector('.item:last-child');
// console.log(lastItem);

const passWordField = document.querySelector('input[type="password"]');
// console.log(passWordField);

/**
 * Manipulating
 */

// classList
const h1 = document.querySelector('h1');
h1.classList.add('primary-heading');
h1.classList.remove('heading'); // visible was not existing at this point
h1.classList.toggle('visible'); // visible got added
h1.classList.toggle('visible'); // visible got removed
h1.classList.replace('primary-heading', 'main-heading');

// console.log(h1.classList);

// innerText
h1.innerText = 'This is the second day of DOM demo';
h1.style.color = 'red';

// console.log(h1.innerText);

// innerHTML
const section = document.querySelector('section');
// console.log(section);
let innerHTML = section.innerHTML;
// console.log(innerHTML);

// createElement
const newP = document.createElement('p');
// newP.innerText = 'I am a new Paragraph';
// newP.innerText = 'I am a new Paragraph again';
// console.log(newP.innerText);

// append
newP.append('I am a new paragraph');
// console.log(newP);

section.append(newP);
section.children[1].remove();
// console.log(section);

// Traversing
const ul = document.querySelector('ul');
// console.log(ul);

const previousSibling = ul.previousElementSibling;
// console.log(previousSibling);

const nextSibling = ul.nextElementSibling;
// console.log(nextSibling);
nextSibling.style.backgroundColor = 'orange';
nextSibling.style.marginBottom = '10px';

// closest
const para = document.querySelector('.para');
// console.log(para.closest('.second'));
// console.log(para.closest('div'));
// console.log(para.closest('.first'));

// matches
const birds = document.querySelector('#birds').children;
// console.log(birds);

for (const bird of birds) {
  if (bird.matches('.endangered')) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}

/**
 *  Review
 */

// Node vs Elements

// Node is a base class
// Everything in the DOM is based on Node
// Elements and Texts are based on Nodes

/**
 *  Traversing: Jumping from one element to its relative
 */

// An example on something that comes from Node and something that comes from Element
// console.log(li.previousSibling); // `Node.previousSibling`
// console.log(li.previousElementSibling); // `Element.previousElementSibling`

const list = document.querySelector('#list');
console.log(list.nodeName);
console.log(list.parentElement);
console.log(list.children);

const li = list.querySelector('li.target'); // Works on elements too!!
console.log(li.matches('.target')); // does this element answer to the given query
console.log(li.matches('#list')); // does this element answer to the given query
console.log(li.closest('div')); // get closest matching parent

// Create elements
const div = document.createElement('div');

// Control elements
div.innerText = 'New Div';
div.id = 'newDiv';
div.classList.add('newDiv');
div.classList.remove('newDiv');

main.append(div);

const mainAgain = document.querySelector('main');
const mainArray = Array.from(mainAgain.children);

console.log(Array.isArray(mainArray));

// Delete elements
const divToBeRemoved = document.querySelector('#newDiv');
divToBeRemoved.remove();
