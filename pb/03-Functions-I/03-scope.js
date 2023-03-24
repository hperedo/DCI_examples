let globalVariable = 100; // Global variable

function first() {
  let firstVariable = 1; // Local variable
  let globalVariable = 200;
  console.log(firstVariable);
  console.log("Called from first function", globalVariable);
}

function second() {
  let firstVariable = 2; // Local variable
  console.log(firstVariable);
  console.log("Called from second function", globalVariable);
}

first();
second();
