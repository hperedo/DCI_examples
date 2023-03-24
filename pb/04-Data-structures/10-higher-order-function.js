/**
 * Abstraction
 *
 * Abstraction allows us to hide details and give us the ability to
 * talk about problems at higher level (or more abtract level)
 */

// print n numbers
// let n = 15;
// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// }

// function to print n numbers -> abstract 'doing something n times'
// function printNumbers(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
// }

// printNumbers(15);
// printNumbers(5);

// Do not forget
/**
 * in Javascript functions are treated as values
 *
 * we can assign it to a variable
 * we can pass it as an argument
 * we can return it from other function
 */

/**
 * Higher order functions
 *
 * Higher order functions are functions that accepts a function
 * as an argument or return a function as an output
 */

// Callback function -> A function that we pass as an argument to
// another function and call from within that function

// function sayHello(callback) {
//   callback('hello');
// }

// sayHello(console.log);

// const fn = sayHello;
// fn();

// function printNumbers(count, callback) {
//   for (let i = 0; i <= count; i++) {
//     callback(i);
//   }
// }

// printNumbers(5, console.log);

// const output = console.log(50);
// console.log(output); // undefined

// Higher order function allows us to abstract over 'callbacks'

/**
 * Mapping
 *
 * A map function takes an array and a callback function as input
 * and returns a new array where all the elements in the original array
 * are tranformed based on the callback funtion
 */

// higher order function
// function myMap(array, callback) {
//   const result = [];

//   for (let item of array) {
//     result.push(callback(item));
//   }

//   return result;
// }

// to be used as a callback function
// function square(n) {
//   return n ** 2;
// }

// to be used as a callback function
// function cube(n) {
//   return n ** 3;
// }

// const squares = myMap([1, 2, 3], square);
// console.log(squares); // [1, 4, 9]

// const cubes = myMap([1, 2, 3], cube);
// console.log(cubes); // [1, 8, 27]

////////////////////////////////////////////////

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

// function capitalize(string) {
//   return `${string[0].toUpperCase()}${string.slice(1)}`;
// }

// const capitalizedAnimals = myMap(animalsArray, capitalize);
// console.log(capitalizedAnimals);

/**
 * Filtering
 *
 * A filter function takes an array and callback function as input,
 * and returns a new array where some of the elements from the original
 * array are removed based on the conditions in the callback function
 */

// function myFilter(array, callback) {
//   let result = [];

//   for (let item of array) {
//     if (callback(item) === true) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const numberArray = [
//   42, 17, 33, 21, 11, 29, 28, 25, 20, 33, 2, 43, 43, 37, 22, 16, 6, 4, 32, 27,
//   20, 35, 40, 14, 42,
// ];

// function biggerThan10(number) {
//   if (number > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function smallerThan10(number) {
//   if (number < 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function divisibleBy2(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const numbersBiggerThan10 = myFilter(numberArray, biggerThan10);
// console.log(numbersBiggerThan10);

// const numbersSmallerThan10 = myFilter(numberArray, smallerThan10);
// console.log(numbersSmallerThan10);

// const numbersDivisibleBy2 = myFilter(numberArray, divisibleBy2);
// console.log(numbersDivisibleBy2);

////////////////////////////////////////////////////////

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

// // only return the animal names that starts with the letter 'b'
// function startsWithB(animal) {
//   return animal.toLowerCase().startsWith('d');
// }

// const animalsNameStartsWithB = myFilter(animalsArray, startsWithB);
// console.log(animalsNameStartsWithB);
