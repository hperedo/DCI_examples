/**
 *
 * Default parameters
 */

// function sayHello(userName = "Mickey Mouse") {
//   console.log(`Hello, ${userName}`);
// }

// sayHello("Chandu"); // Hello, Chandu
// sayHello(); // Hello, Mickey Mouse

//////////////////////////////////////
// function add(a = 2, b = 3) {
//   console.log(a + b);
// }

// add(); // 5
// add(10, 10); // 20

/////////////////////////////////////
// function sum(a, b) {
//   console.log(a + b);
// }

// sum(); // NaN
// sum(2, 3); // 5

/**
 *
 * Rest parameters
 */

// function sum(discount, ...args) {
//   console.log(args);
//   console.log(discount);
// }

// sum(10, 20, 50, 40);

///////////////////////////
// Take n number of arguments and multiply it with x and sum it

// x -> argument
// n numbers -> arguments

function toMultiply(x, ...numbers) {
  // numbers -> Normal Array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * x;
  }
  return sum;
}

// sum = sum + (numbers[0] * x) + (numbers[1] * x) + (numbers[2] * x) ...
// sum = 0 + (1 * 2) + (2 * 2) + (3 * 2)

console.log(toMultiply(2, 1, 2, 3));
