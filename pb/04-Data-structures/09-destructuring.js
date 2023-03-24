/**
 *  Destructuring
 */

// Array destructuring

const animalsArray = [
  'cat',
  'dog',
  'duck',
  'bird',
  'cougar',
  'giraffe',
  'bee',
  'dove',
  'koala',
];

const fishArray = [
  'merkela',
  'salmon',
  'king fish',
  'tilapia',
  'tuna',
  'koi',
  'lachs',
  'shark',
];

// // let animal1 = animalsArray[0];
// // let animal2 = animalsArray[1];

// destructuring animalsArray into animal1, animal2 and rest of the items
const [animal1, animal2, ...rest] = animalsArray;

// combining animals array and fish array using spread operator and
// then destructuring animal1, animal2 and the rest of the items
// from the combined array
// const [animal1, animal2, ...rest] = [...animalsArray, ...fishArray];

console.log(animal1);
console.log(animal2);
console.log(rest);

/**
 * Object destructuring
 */

const person = {
  firstName: 'Angela',
  lastName: 'Merkel',
  profession: 'Chancellor',
};

// let firstName = person.firstName;
// let lastName = person.lastName;

const { firstName, lastName } = person;
// console.log(firstName, lastName);

// // giving new names to the items
// const { firstName: vorName, lastName: nachName } = person;
// console.log(vorName, nachName);

/**
 * Destructuring arguments (inside function paranthesis)
 */

function sayHello({ firstName, lastName }) {
  console.log(`Hello, ${firstName} ${lastName}`);
}

sayHello(person);
