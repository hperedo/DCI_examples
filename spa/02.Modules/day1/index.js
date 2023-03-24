// const glovar = 10;

// destructuring imports
import { addPost as kitten } from './posts.js';
import addUser from './users.js';
import { getRandomArbitrary, getRandomInt } from './numbers.js';
import getRandom from './defaultExport.js';

// Namespacing imports
// import * as number from './numbers.js';

kitten('post1');
addUser('Humberto');
addUser('David');

console.log(getRandomArbitrary(10, 20));
console.log(getRandomInt(30));

// console.log(number.getRandomArbitrary(50, 70));
// console.log(number.getRandomInt(100));

console.log(getRandom());
