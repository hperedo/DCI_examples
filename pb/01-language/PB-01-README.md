# programming_basics_01

---

**Statement**:- A statement is a piece of code that executes a specific instruction or tells the computer to complete a task. All statements in java-script should be terminated by a semicolon.

**Expression:-** An expression is a piece of code that can be evaluated to a value and is composed of variables, operators, function calls, and literals.

---

**Variables**: To store data temporarily in the computer's memory

- Cannot be reserved words
- Should be meaningful
- Cannot start with a number
- It cannot contain a space or hyphen
- camel case by convention

---

The kind of values that we can assign to a variable..

**Primitives / Value Types**

- String - A string is a sequence of characters. A string is iterable. Multiply by 1 to convert to a number
- Number
- Boolean
- undefined
- null - we use it in situations where we want to clear the value of a variable

**Reference Types**

- Object
- Array
- Function

---

**Operators:-**

- Arithmetic - +, -, \*, /, %, \*\*, ++, —
- Assignment
- Comparison
- Logical

```javascript
// Arithmetic operators

let x = 10;
let y = 5;

console.log(x + y); // multiplication
console.log(x - y); // Substraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus
console.log(x ** y); // Exponentiation

console.log(x++); // log the value first and then evaluate x = x + 1

x += 5; // x = x + 5
x *= 5; // x = x * 5

x + y; // An expression is something that produces a value
```

```javascript
// Comparison operator

// Relational operator
let x = 1;
console.log(x > 0); // true
// The result of a comparison operator is a Boolean

//Strict Equality Operator (Type + Value)
x === 1; // true
x !== 1; // false

// Loose Equality Operator (Only Value)
x == "1"; // true
```

```javascript
// Operator Precedence

let x = 2 + 3 * 4;
console.log(x); // 14

let x = (2 + 3) * 4;
console.log(x); // 20
```
