/**
 * Higher order function
 *
 * Higher order functions are functions that accepts a function
 * as an argument or return a function as an output
 */

// function greeting() {
//   return function (name) {
//     console.log(`Hi, ${name}`);
//   };
// }

// const greet = greeting();
// // console.log(greet);

// greet('Teng');
// greet('Anas');

/**
 * Counter
 */

// function counter() {
//   let count = 0;
//   count++;
//   return count;
// }

// console.log(counter());

// // count = 10;
// console.log(counter());
// console.log(counter());

/**
 * Closure
 */

/**
 * A closure is a function having access to the parent scope,
 * even after the parent function has closed (executed)
 */

/**
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its outer state (the lexical environment).
 */

/**
 * A closure is created when we define a function, not when a function
 * is executed
 */

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// // At this point the create function is closed (finished execution)
// // console.dir(counter);
// console.dir(counter());

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

/******************************************************** */

function createCounter() {
  let count = 0;

  // const increment = () => {
  //   count++;
  //   return count;
  // };

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  return { increment, decrement };
}

const counter = createCounter();

// console.log(counter);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment()); // 4

console.log(counter.decrement()); // 3
console.log(counter.decrement());

// /**
//  * Map recap
//  */

// const studentsArray = [
//   'Agi',
//   'Sarina',
//   'Rodrigo',
//   'Janos',
//   'Emmanuel',
//   'Rana',
//   'Vijaya',
//   'David',
//   'Diouani',
//   'Alveena',
//   'Francis',
//   'Humberto',
//   'Yazan',
//   'Anas',
//   'Teng',
//   'Mohammad',
// ];

// // callback function
// function toLowerCaseLetter(string) {
//   //image 100 lines of code written already
//   return string.toLowerCase();
// }

// // main function
// function convertArrayToLowerCase(names, callback) {
//   // no need to reap it here, when we could recieve it as an argument
//   return names.map((item) => callback(item));
// }

// console.log(convertArrayToLowerCase(studentsArray, toLowerCaseLetter));
