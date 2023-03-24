/**********************
 * Language
 */

/**
 * JavaScript is a high-level, often just-in-time compiled language that conforms to the
 * ECMAScript standard. It has dynamic typing, prototype-based object-orientation,
 * and first-class functions. It is multi-paradigm, supporting event-driven, functional,
 * and imperative programming styles. It has application programming interfaces (APIs)
 * for working with text, dates, regular expressions, standard data structures,
 * and the Document Object Model (DOM). -- wikipedia
 */

// https://en.wikipedia.org/wiki/JavaScript
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript

/********************
 * Variables
 */

/**
 * In computer programming, a variable is an abstract storage location paired with an associated
 * symbolic name, which contains some known or unknown quantity of information referred to as a value;
 * or in simpler terms, a variable is a named container for a particular set of bits or type of data
 * - like integer, float, string etc -- wikipedia
 */

// https://en.wikipedia.org/wiki/Variable_(computer_science)

//  - Cannot be reserved words
//  - Should be meaningful
//  - Cannot start with a number
//  - It cannot contain a space or hyphen
//  - camel case by convention

// Declaration and assignment
// let variable1 = 10;
// const variable2 = 5;

// // const cannot be reassigned

// const string1 = 'Some text';

/************************
 * Data types
 */

// Primitives (Value Types):- Number, String, Boolean, undefined, null
// Objects (Reference Types):- Object, Array, Function

/**
 * Value types
 */

// - String - A string is a sequence of characters. A string is iterable.
// - Number
// - Boolean
// - undefined - the absence of a value
// - null - the absence of an object

/**
 * Conceptually, undefined indicates the absence of a value, while null indicates
 * the absence of an object (which could also make up an excuse for
 * typeof null === "object") -- MDN
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type

/**
 * Reference types
 */

//  - Object
//  - Array
//  - Function

// typeof operator
// console.log(typeof string1); // 'string'

/************************
 * Statements
 */

/**
 * A statement is a piece of code that executes a specific instruction or tells the computer
 * to complete a task. All statements in java-script should be terminated by a semicolon.
 */

// satement
// console.log('Hello World');

/************************
 * Expressions
 */

/**
 * An expression is a piece of code that can be evaluated to a value and is composed of
 * variables, operators, function calls, and literals.
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

// console.log(5 + 5);

/**
 * Literals
 */

/**
 * Literals represent values in JavaScript.
 * These are fixed values—not variables—that you literally provide in your script.
 */

// string literal => "foo"
// numeric literal => 5
// object literal => {car: "BMW", type: diesel}
// array literal => [1, 2 , 3]
// boolean literal => true or false

/**
 * Basic string methods/properties
 */

// const myString = '  This is a string   ';

// console.log('myString.length', myString.length);
// const newString = myString.trim();
// console.log('last letter of new string', newString[newString.length - 1]);

// console.log('myString.toLocaleLowerCase', myString.toLowerCase());
// console.log('slice', newString.slice(1, 4));
// console.log('includes', myString.includes('i'));

/**
 * Basic number methods
 */

// console.log('parseInt', Number.parseInt('1'));
// console.log('parseFloat', Number.parseFloat('1.15414569'));

// const number = 10.159875;
// console.log('toFixed', number.toFixed(2));

/**
 * Math object
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// console.log('ceil', Math.ceil(1.69));
// console.log('floor', Math.floor(1.69));
// console.log('round', Math.round(1.69));
// console.log('random', Math.random());

/**********************************
 * Decisions
 */

// const cloudy = true;

// if (cloudy) {
//   console.log('Take umbrella');
// } else {
//   console.log('Do not take umbrella');
// }

// console.log(cloudy ? 'Take umbrella' : 'Do not take umbrella');

/**********************************
 * Array
 */

/**
 * The Array object, as with arrays in other programming languages, enables storing
 * a collection of multiple items under a single variable name,
 * and has members for performing common array operations - MDN
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// let numbers = [1, 2, 3];

// numbers = [];

// /**
//  * Basic array methods
//  */

// // Add values in the end of the array
// numbers.push(5, 6);
// console.log(numbers);

// // Add values in the beginning of the array
// // numbers.unshift(-1, 0);
// // console.log(numbers);

// // Access individual elements by position
// console.log(numbers[2]);

// // Reassign values of individual elements
// numbers[2] = 'a';
// console.log(numbers);

// // Remove last item
// const popped = numbers.pop();
// console.log(popped);
// console.log(numbers);

// // Remove first item
// numbers.shift();
// console.log(numbers);

// console.log(numbers.includes(5));
// numbers.push(5, 6, 0, 8, 3);
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

/************************************
 * Objects
 */

/**
 * The Object type represents one of JavaScript's data types. It is used to store various
 * keyed collections and more complex entities. Objects can be created using
 * the Object() constructor or the object initializer / literal syntax - MDN
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// const person = {
//   name: 'Tintumon',
//   age: 13,
//   height: 130,
//   hobbies: ['playing', 'joking', 'monkeying'],
//   address: {
//     houseNumber: 1,
//     street: 'MG Road',
//     city: 'Cochin',
//   }, // This is a nested object
// };

// console.log(person);

// // Dot Notation
// console.log(person.name);

// person.name = 'Boban';
// console.log(person.name);

// // Bracket Notation
// console.log(person['name']);

// person['name'] = 'Moly';
// console.log(person['name']);

// // Usage of bracket notation
// let userSelection = 'age';
// console.log(person[userSelection]); // 13

// // working with nested data types
// person.hobbies.push('mocking');
// console.log(person.hobbies);

// console.log(person.address.street);

// person.address.lane = 'First';
// person.address['postcode'] = '682016';
// console.log(person.address);

/**
 * Static methods
 */

// Returns an array of keys
// console.log(Object.keys(person));

// Return an array of values
// console.log(Object.values(person));

// const newObject = Object.assign({}, {friend: 'Humberto'})

// Instead of Object.assign(), we can use the spread
// const newObject = { ...person, friend: 'Humberto' };
// console.log(newObject);

/*****************************
 * Loops
 */

// for-loop
// for (let i = 0; i <= 10; i++) {
//   console.log('Hi I am just looping!');
// }

// for-of loop
// const loopMe = 'Hi I am for looping';

// for (const item of loopMe) {
//   console.log(item);
// }

// forEach
const studentsArray = [
  'Agi',
  'Sarina',
  'Rodrigo',
  'Janos',
  'Emmanuel',
  'Rana',
  'Vijaya',
  'David',
  'Diouani',
  'Alveena',
  'Francis',
  'Humberto',
  'Yazan',
  'Anas',
  'Teng',
  'Mohammad',
];

// studentsArray.forEach((item, index) => {
//   console.log(index, item);
// });

// for-in loop
// const shoppingCart = {
//   shirt: 5,
//   pant: 3,
//   shoes: 1,
//   bag: 5,
// };

// for (const key in shoppingCart) {
//   if (key === 'pant') {
//     console.log(shoppingCart[key]);
//     break;
//   }
// }

// function loop(item) {
//   for (const key in shoppingCart) {
//     if (key === item) return shoppingCart[key];
//   }
// }

// console.log(loop('pant'));

// let money = 15;

// while loop
// while (money != 0) {
//   console.log('consume 1 euro');
//   --money;
//   console.log('remaining money', money);
// }

// while (money != 0) {
//   --money;
//   console.log('Bought a cofee with 1 Euro: remaining money', money);
// }

// let student = '';

// while (student != 'Anas') {
//   student = studentsArray.pop();
//   console.log(student);
// }

/*************************************
 * Functions
 */

/**
 * Functions are a fundamendal building block of a JavaScript program.
 * It is a block of code that is defined once, but may be used many times.
 */

/**
 * Functions are a way to organise larger programs into smaller subprograms with specific names.
 * It helps reduce code repetition and provides isolation from each other.
 */

/**
 * Functions are defined to perform a particular task and often returns a value.
 * A JavaScript function is executed when "something" invokes it (calls it).
 */

// function sayHello(firstName, lastName) {
//   return `Hello, ${firstName} ${lastName}`;
// }

// console.log(sayHello('Sasidharan', 'Chandu'));
// console.log(sayHello('Agi', 'Msola'));

// Function Declaration
// function reminder(num1, num2) {
//   console.log(num1 % num2);
// }

// reminder(10, 3);

// Function Expression
// const reminder = function (num1, num2) {
//   console.log(num1 % num2);
// };

// reminder(10, 3);

// // Arrow Function
// const reminder = (num1, num2) => {
//   console.log(num1 % num2);
// };

// reminder(10, 3);

/**
 * Scope
 */

// let globalVariable = 100; // Global variable

// function first() {
//   let firstVariable = 1; // Local variable
//   let globalVariable = 200;
//   console.log(firstVariable);
//   console.log('Called from first function', globalVariable);
// }

// function second() {
//   let firstVariable = 2; // Local variable
//   console.log(firstVariable);
//   console.log('Called from second function', globalVariable);
// }

// first();
// second();

/**
 *
 * Rest parameter
 */

// function sum(discount, second, ...restOfTheItem) {
//   console.log(discount);
//   console.log(second);
//   console.log(restOfTheItem); // array
// }

// sum(10, 20, 50, 40, 50);

// Write a funcion that takes n number of arguments and multiply it with x and
// sum it up

// x -> argument
// n numbers -> arguments

// const toMultiply = (num, ...arr) => {
//   return arr.reduce((prev, curr) => {
//     console.log(prev, curr, num);
//     return prev + curr * num;
//   }, 0);
// };

// console.log(toMultiply(2, 1, 2, 3)); // 12

/************************
 *  Copy by value (cloning) vs Copy by reference
 */

// const fruitBasket1 = { apple: 5, peach: 10, tomato: 7 };

/**
 * copy by value (cloning)
 *
 * creating a new object called fruitbasket2 and copy the value of fruitbasket1
 * to the new object
 */
// const fruitBasket2 = { ...fruitBasket1 };

// console.log('fruitBasket1:', fruitBasket1); // {apple: 5, peach: 10, tomato: 7}
// console.log('fruitBasket2:', fruitBasket2); // {apple: 5, peach: 10, tomato: 7}

// console.log(fruitBasket1 === fruitBasket2); // false

/**
 * copy by reference
 *
 * Copying the address/reference of fruitbasket1 to fruitbasket2
 */
// const fruitBasket2 = fruitBasket1;

// console.log('fruitBasket1:', fruitBasket1); // {apple: 5, peach: 10, tomato: 7}
// console.log('fruitBasket2:', fruitBasket2); // {apple: 5, peach: 10, tomato: 7}

// console.log(fruitBasket1 === fruitBasket2); // true

/****************************************
 *  Destructuring
 */

/**
 * Array destructuring
 */

// const animalsArray = [
//   'cat',
//   'dog',
//   'duck',
//   'bird',
//   'cougar',
//   'giraffe',
//   'bee',
//   'dove',
//   'koala',
// ];

// let animal1 = animalsArray[0];
// let animal2 = animalsArray[1];

// destructuring animalsArray into animal1, animal2 and rest of the items
// const [animal1, animal2, ...rest] = animalsArray;

// console.log(animal1);
// console.log(animal2);
// console.log(rest);

/**
 * Object destructuring
 */

// const person = {
//   firstName: 'Angela',
//   lastName: 'Merkel',
//   profession: 'Chancellor',
//   address: 'Street Name',
// };

// let firstName = person.firstName;
// let lastName = person.lastName;

// const { firstName, lastName, ...rest } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(rest);

/**
 * Destructuring arguments (inside function paranthesis)
 */

// function sayHello({ firstName, lastName, ...rest }) {
//   console.log(`Hello, ${firstName} ${lastName}`);
//   console.log(rest);
// }

// sayHello(person);

/**
 * Advanced array methods
 */

// const products = [
//   'Shirt',
//   'Jeans',
//   'Jeans',
//   'Shoes',
//   'Shoes',
//   'Hat',
//   'Shirt',
//   'Bag',
// ];

/**
 * Map method
 */

// returns an other array equal in size, we have an oppertunity to covert
// each item to some other shape

// const mappedArray = products.map((item) => item.toLocaleLowerCase());
// console.log(mappedArray);

/**
 * Filter method
 */

// returns a subset of the original array

// const filteredArray = products.filter((item) => item.startsWith('S'));
// console.log(filteredArray);

// const filteredArray2 = products.filter((item) => item.length < 4);
// console.log(filteredArray2);

// const filteredArray3 = products.filter((item) => item.includes('e'));
// console.log(filteredArray3);

/**
 * Reduce method
 */

// returns a single value

// const products = [
//   'Shirt',
//   'Jeans',
//   'Jeans',
//   'Shoes',
//   'Shoes',
//   'Hat',
//   'Shirt',
//   'Bag',
// ];

// const reduceToString = products.reduce((previousValue, currentValue) => {
//   const parts = (previousValue = previousValue + '+' + currentValue);
//   console.log(parts);
//   return parts;
// });

// console.log(reduceToString);

// same as above
// const reduceToString2 = products.reduce((previousValue, currentValue) => {
//   const parts = (previousValue += '+' + currentValue);
//   console.log(parts);
//   return parts;
// });

// console.log(reduceToString2);

// const reduceToString3 = products.reduce((previousValue, currentValue) => {
//   const parts = (previousValue += currentValue);
//   console.log(parts);
//   return parts;
// });

// console.log(reduceToString3);

// Reduce to an Object of {item : quantity} format

// const reduceToObject = products.reduce((acc, currentValue) => {
//   if (acc[currentValue]) acc[currentValue]++;
//   else acc[currentValue] = 1;
//   //   console.log(acc);
//   return acc;
// }, {});

// console.log(reduceToObject);

/**
 * Sort Method
 */

// const products = [
//   'Shirt',
//   'Jeans',
//   'Jeans',
//   'Shoes',
//   'Shoes',
//   'Hat',
//   'Shirt',
//   'Bag',
// ];

/**
 * sort((a,b)=>{})
 *
 * > 0	sort b before a
 * < 0	sort a before b
 * === 0 keep original order of a and b
 */

// const numbers = [8, 9, 1, 3, 5];

// numbers.sort();
// console.log(numbers);

// numbers.sort((a, b) => {
//   if (b > a) return 1;
//   if (b < a) return -1;
//   else return 0;
// });

// numbers.sort((a, b) => b - a);

// console.log(numbers);

/******************************************** */

// const products = [
//   'Shirt',
//   'Jeans',
//   'Jeans',
//   'Shoes',
//   'Shoes',
//   'Hat',
//   'Shirt',
//   'bag',
// ];

// const lowerCaseProducts = products.map((item) => item.toLowerCase());
// console.log(lowerCaseProducts);
// lowerCaseProducts.sort();
// console.log(lowerCaseProducts);

// lowerCaseProducts.sort((a, b) => {
//   if (b > a) return 1;
//   if (b < a) return -1;
//   else return 0;
// });

// lowerCaseProducts.sort((a, b) => b - a);
// console.log(lowerCaseProducts);

/***************************************** */

// let todos = [
//   {
//     todo: 'watch netflix',
//     priority: 4,
//   },

//   {
//     todo: 'buy groceries',
//     priority: 2,
//   },
//   {
//     todo: 'clean the apartment',
//     priority: 3,
//   },
//   {
//     todo: 'study',
//     priority: 1,
//   },
// ];

// todos.sort((a, b) => a.priority - b.priority);
// console.log(todos);

/**
 * Exercises
 */

const cart = [
  {
    type: 't-shirt',
    price: 9.99,
    color: 'white',
  },
  {
    type: 'shoes',
    price: 49.99,
    color: 'dark green',
  },
  {
    type: 'jeans',
    price: 19.99,
    color: 'blue',
  },
  {
    type: 'shirt',
    price: 12.99,
    color: 'black',
  },
  {
    type: 'hoodie',
    price: 19.99,
    color: 'blue',
  },
  {
    type: 'hat',
    price: 9.99,
    color: 'red',
  },
  {
    type: 't-shirt',
    price: 19.99,
    color: 'yellow',
  },
  {
    type: 't-shirt',
    price: 29.99,
    color: 'silver',
  },
  {
    type: 'jacket',
    price: 49.99,
    color: 'black',
  },
];

/**
 * Total price
 */
// function totalPrice(cart) {
//   return cart.reduce((acc, currentItem) => (acc += currentItem.price), 0);
// }

// console.log(totalPrice(cart));

// Unique producst
// function uniqueProducts(cart) {
//   return cart.reduce((acc, currentItem) => {
//     if (!acc.includes(currentItem.type)) {
//       acc.push(currentItem.type);
//       return acc;
//     } else {
//       return acc;
//     }
//   }, []);
// }

// console.log(uniqueProducts(cart));

/**
 * Unique Prices
 */
// function uniquePrices(cart) {
//   return cart.reduce((acc, currentItem) => {
//     if (!acc.includes(currentItem.price)) {
//       acc.push(currentItem.price);
//       return acc;
//     } else {
//       return acc;
//     }
//   }, []);
// }

// console.log(uniqueProducts(cart));

// All prices in an array
// function allPrices(cart) {
//   return cart.map((item, index) => [index, item.price]);
// }

// console.log(allPrices(cart));

/************************************************************ */

// function firstLetters(str) {
//   let parts = str.split(' ');
//   console.log('parts', parts);
//   let newWordArray = parts.map((item) => item[0]);
//   console.log('newWordArray', newWordArray);

//   let newWord = newWordArray.join('');
//   return newWord;
// }

// const string1 = firstLetters('What the fun');
// const string2 = firstLetters('MongoDB Express React Node ');
// const string3 = firstLetters('What You See Is What You Get');

// console.log(string1); // Wtf
// console.log(string2); // MERN
// console.log(string3); // WYSIWYG

/************************************************************************* */
// function formatText(text) {
//   const formattedText = text
//     .split(' ')
//     .filter((letter) => letter !== '')
//     .join(' ');

//   console.log(formattedText);
// }

// let formattedText = formatText('     Marie    Curie');
// console.log(formattedText); // Marie Curie

/*********************************************************** */

// function reverseString(str) {
//   let revString = '';
//   for (const letter of str) {
//     revString = letter + revString;
//   }
//   return revString;
// }

// console.log(reverseString('hello')); // 'olleh'

// function reverseString(array) {
//   let revString = '';
//   for (const letter of array) {
//     revString = letter + revString;
//   }
//   return revString;
// }

// console.log(reverseString([1, 2, 3, 4, 5, 6])); // 'olleh'

/*************************************************************** */
// Write a function to reverse an array without the .reverse() method
// credit, Humberto!!
// function reverseArrNumber(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(reverseArrNumber([1, 2, 3, 4, 5]));

/*************************************************** */

// function isPalindrome(str) {
//   return str.split('').reverse().join('') === str;
// }

// // function isPalindrome(str) {}

// console.log(isPalindrome('racecar')); // true
// console.log(isPalindrome('Hello')); // false

/********************************************** */

// function reverseInt(int) {
//   const revString = int.toString().split('').reverse().join('');
//   return parseInt(revString) * Math.sign(int);
// }

// console.log(reverseInt(521)); // == 125
// console.log(reverseInt(-521)); // == -125

/*********************************************** */

// function isAnagram(strA, strB) {
//   return strA.split('').sort().join('') === strB.split('').sort().join('');
// }

// console.log(isAnagram('elbow', 'below'));

/**************************************** */

// function maxCharacter(str) {
//   let maxCount = 0;
//   let maxChar = '';

//   str.split('').forEach((char, index, array) => {
//     let count = 0;

//     for (const letter of array) {
//       if (char === letter) count++;
//     }

//     if (maxCount < count) {
//       maxCount = count;
//       maxChar = char;
//     }
//   });

//   return maxChar;
// }

// console.log(maxCharacter('javascript')); // 'a'

// const testArray = [1, 'test'];

// console.log(typeof testArray.push('another string'));

// console.log(testArray);

// testArray.sort();

// const obj = {
//   item1: 21,
//   item2: 22,
//   item3: 54,
// };

// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// let someVariable = 55; // global variable

// function testFn() {
//   let temperature = 30;
//   console.log(temperature);

//   if (true) {
//     const another = 10; // let & const are block scoped but var is function scoped
//     console.log(another);
//   }
// }

// testFn();

// const myCities = ['Rome', 'Berlin'];
// console.log(Array.isArray(myCities));

// myCities.push('Paris');
// console.log(myCities);
// console.log('shift', myCities.shift());
// console.log(myCities);
// console.log('pop', myCities.pop());

// console.log(myCities);
