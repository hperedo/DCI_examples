/**
 * Methods
 *
 * If a function is part of an object, we call it a method
 */

// const person = {
//   name: 'Tintumon',
//   heoght: 130,
//   age: 13,
//   talk(text) {
//     console.log(`Hey there! ${text}`);
//   },
// };

// person.talk('Whats up?');

/***********************************************/
// Math.floor, Math.ceil, Math.round

// console.log(Math.floor(5.3));
// console.log(Math['floor'](5.3));

// console.log('hey');
// console['log']('hey');

// console.log(console);
// console.info('This is an info');
// console.warn('This is a warning');
// console.error('This is an error');

/**********************************************/

// const buddy = {
//   name: 'Tintumon',
//   heoght: 130,
//   age: 13,
//   talk(text) {
//     console.log(`Hey there! ${text}`);
//     return 'Successfully console logged';
//   },
// };

// let output = buddy.talk('Whats up?');
// console.log(output);

/*********************************************/

// const buddy = {
//   name: 'Tintumon',
//   height: 130,
//   age: 13,
//   talk() {
//     console.log(`Hey there! I am ${this.name}`); // Hey there! I am Tintumon
//     // console.log(this.name);
//   },
// };

// buddy.talk();

/**
 * 'this' is a reference to the object that is
 *  executing the function
 */

/*********************************************/

// const shoppingCart = {
//   shirt: 5,
//   pant: 3,
//   shoes: 1,
//   push(item, quantity) {
//     this[item] = quantity; //=> shoppingCart['bag'] = 1
//   },
// };

// console.log(shoppingCart); // {shirt: 5, pant: 3, shoes: 1, push: ƒ}

// // shoppingCart.bag = 1;

// shoppingCart.push('bag', 1);
// console.log(shoppingCart); // {shirt: 5, pant: 3, shoes: 1, bag: 1, push: ƒ}

// shoppingCart.push('umbrella', 1);
// console.log(shoppingCart);

/********************************************************************/

// delete shoppingCart.pant;
// console.log(shoppingCart);

/**
 * Use the delete operator and implement a pop
 * method. Obviously the method should recieve the
 * element to be deleted as an argument.
 */

// const shoppingCart = {
//   shirt: 5,
//   pant: 3,
//   shoes: 1,
//   push(item, quantity) {
//     this[item] = quantity; //=> shoppingCart['bag'] = 1
//   },
//   pop(item) {
//     const deletedItem = {};
//     deletedItem[item] = this[item]; // deletedItem['shirt'] = shoppingCart['shirt']
//     delete this[item]; // delete shoppingCart['shirt']
//     return deletedItem;
//   },
// };

// console.log(shoppingCart);

// // delete shoppingCart.shirt;
// // console.log(shoppingCart);

// let popped = shoppingCart.pop('shirt');
// console.log(shoppingCart);
// console.log(typeof popped);
// console.log(popped); // {shirt: 5}

// shoppingCart.push('watch', 1);
// console.log(shoppingCart);

// let popped1 = shoppingCart.pop('pant');
// console.log(popped1);
// console.log(shoppingCart);

/*********************************************************/
/**
 * Constructor Function   // Ignore this for now
 */

// function Person(name, age) {
//   (this.name = name),
//     (this.age = age),
//     (this.describe = function () {
//       return `${this.name} is ${this.age} years old`;
//     });
// }

// const person1 = new Person('Tintumon', 13);
// // console.log(person1);

// const person2 = new Person('Boban', 21);
// // console.log(person2);

// const person1_description = person1.describe();
// console.log(person1_description);

// const person2_description = person2.describe();
// console.log(person2_description);

// const newArray = new Array('a', 'b', 'c');
// console.log(newArray);

// const newObject = new Object({ name: 'Tintumon' });
// console.log(newObject);
