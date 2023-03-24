/**
 *  Recursion
 *
 * The act of a function calling itself over and over again.
 * Recursion is used to solve problems that contain smaller sub-problems.
 */

// Error: Max call stack size reached

// function recursion() {
//   recursion();
// }

// recursion();

/**
 *  Lets get the basics right ///////////////
 */

// function message() {
//   return;
//   // This is an unreachable line
// }

// message();

/****************************************************** */

// function message() {
//   return 'This is a message';
//   // This is an unreachable line
// }

// console.log(message());

/*************************************************** */

// function message() {
//   function getMessage() {
//     return 'This is a message';
//   }

//   return getMessage();
// }

// console.log(message());

/************************************************** */

// function printNumbersFrom(number) {
//   if (number === 3) return 'done and dusted!';

//   console.log(number);
//   number++;

//   return printNumbersFrom(number);
// }

// console.log('output:', printNumbersFrom(1));

/************************************************* */

/**
 *  Factorial of n
 */

// 0! === 1
// 1! === 1
// 3! === 3 * 2 * 1 === 6
// 4! === 4 * 3! === 24
// 5! === 5 * 4!

// n! === n * (n-1)!

// function factorial(n) {
//   //   console.log(n);
//   if (n === 1) return 1;

//   return n * factorial(n - 1);
// }

// console.log(factorial(4));

/**
 *  factorial (4)
 *      4 * factorial(3)
 *          3 * factorial(2)
 *              2 * factorial(1)
 *                  1
 *
 */

/****************************************************/

/**
 *  math.pow(x,y)
 *
 *  math.pow(2, 3) === 2 * 2 * 2
 *
 *  math.pow(x, y) === x * x * .... y times
 */

// function powerOf(x, y) {
//   if (y === 0) return 1;

//   y--;
//   return x * powerOf(x, y);
// }

// console.log(powerOf(2, 3));

/**
 *  powerOf(2, 3)
 *      2 * powerOf(2, 2)
 *          2 * powerOf(2, 1)
 *              2 * powerOf(2, 0)
 *                  1
 */

/*************************************************************************** */

// const sum = function (array) {
//   if (array.length === 1) {
//     return array[0];
//   } else {
//     return array.pop() + sum(array);
//   }
// };

// const array = [1, 2, 3, 4, 5, 6];

// console.log(sum(array)); // 21

/***************************************************************** */

/**
 *  Treasure hunt! Search for $
 */

// Write a function named huntTreasure() which takes a deeply nested array
// as argument, and search for the tresure '$'.
// If found, return 'Hooray, treasure unlocked!' or else
// return 'There is no treasure :('

function huntTreasure(array) {
  let treasure = false;

  const search = (array) => {
    if (array.length === 0) return treasure;

    for (let item of array) {
      if (treasure) break;

      if (item === '$') {
        treasure = true;
        break;
      } else if (Array.isArray(item)) {
        treasure = search(item);
      }
    }

    return treasure;
  };

  return search(array)
    ? 'Hooray, treasure unlocked!'
    : 'There is no treasure :(';
}

const array1 = [1, 2, 3, [4, '$', 6], 7, 8];
const array2 = [1, 2, 3, [4, 5, 6], 7, 8, ['$'], 9];
const array3 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, '$', [13, 14, 15]]]]];

const array4 = [1, 2, 3, 4, 5, 6];
const array5 = [1, 2, 3, [4, 5, 6], 7];
const array6 = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12, [13, 14, 15]]];

console.log(huntTreasure(array1)); // Hooray, treasure unlocked!
console.log(huntTreasure(array2)); // Hooray, treasure unlocked!
console.log(huntTreasure(array3)); // Hooray, treasure unlocked!

console.log(huntTreasure(array4)); // There is no treasure :(
console.log(huntTreasure(array5)); // There is no treasure :(
console.log(huntTreasure(array6)); // There is no treasure :(
console.log(huntTreasure([])); // There is no treasure :(
