// function first() {
//   console.log("first");
// }

// function second() {
//   console.log("second");
// }

// function third() {
//   console.log("third");
// }

// third();
// first();
// second();

let globalVariable = "I am a global variable";

function first() {
  let firstVariable = 1;
  console.log("Hi from first function!");
  second();
}

function second() {
  let secondVariable = 2;
  console.log("Hi from second function!");
  third();
}

function third() {
  let thirdVariable = 3;
  console.log("Hi from third function!");
}

first();
