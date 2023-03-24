/**
 * ***** Function as values
 */

// function sayHello() {
//   return 'Hello World';
// }

// // console.log(sayHello);

// const someVariable = sayHello;
// // console.log(someVariable);

// const output = someVariable();
// console.log(output);

// console.log(someVariable === sayHello);

// console.log(typeof someVariable);

/**
 ******* 'this'
 */

function introduce() {
  console.log(
    `Hi, my name is ${this.firstName} and I am ${this.age} years old`
  );
}

introduce(); // firstName and age will be undefined because 'this' in this case referes to the
// global/window object and those object doesn't have properties called firstName or age

const person1 = {
  firstName: 'Boban',
  age: 18,
  introduce: introduce,
};

const person2 = {
  firstName: 'Moly',
  age: 21,
  introduce: introduce,
};

person1.introduce(); // Hi, my name is Boban and I am 18 years old
person2.introduce(); // Hi, my name is Moly and I am 21 years old
