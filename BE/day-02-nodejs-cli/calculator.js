// node calculator.js add 1 2 ===> 3
// node calculator.js subtract 3 2 ===> 1
// node calculator.js multiply 3 2 ===> 6
// node calculator.js divide 4 2 ===> 2
console.log(process.argv)
// slice(2) ==> drop the first two elements from process.argv array
let operation = process.argv.slice(2)[0];
let firstNumber = Number(process.argv.slice(2)[1])
let secondNumber = Number(process.argv.slice(2)[2])
console.log("Operation: " + operation);
switch (operation) {
  case "add":
    console.log("Addition");
    console.log(
        firstNumber + secondNumber
    );
    break;
  case "subtract":
    console.log("Subtraction");
    console.log(
        firstNumber - secondNumber
    );
    break;
    case "multiply":
    console.log("Multiplication");
    console.log(
        firstNumber * secondNumber
    );
    break;
    case "divide":
    console.log("Division");
    console.log(
        firstNumber / secondNumber
    );
}
