/**
 * Object
 *
 * An object in a programming language is like an an object in real life.
 * For example think about a person - a person has a name,
 * height, age, address etc. These are highly related things and instead of creating
 * seperate variables, we can create an object having these properties.
 *
 */

/**
 * The purpose of an object is to group related variables and the functions
 * that operate on them into a single unit
 */

const person = {
  name: 'Tintumon',
  age: 13,
  height: 130,
  hobbies: ['playing', 'joking', 'monkeying'],
  address: {
    houseNumber: 1,
    street: 'MG Road',
    city: 'Cochin',
  }, // This is a nested object
};

console.log(person);

/// Dot Notation
console.log(person.name);

person.name = 'Boban';
console.log(person.name);

/// Bracket Notation
console.log(person['name']);

person['name'] = 'Moly';
console.log(person['name']);

// Usage of bracket notation
let userSelection = 'age';

console.log(person[userSelection]);

/*********************************************/

person.hobbies.push('mocking');
console.log(person.hobbies);

console.log(person.address.street);

person.address.postcode = '682016';
console.log(person.address);
