/**
 * Recap
 */

/**
 * Clones (copy by value) vs References
 */

// Value Types:- Number, String, Boolean, undefined, null, Symbol
// Reference Types:- Object, Array, Function

// Value Types are always copied by their value (cloning)
// let firstNumber = 5;
// let secondNumber = firstNumber;

// firstNumber = 10;

// console.log('firstNumber:', firstNumber);
// console.log('secondNumber:', secondNumber);

// Reference types are by default copied by their reference
// let firstObject = { apple: 5 };
// let secondObject = firstObject;

// firstObject.apple = 10;

// console.log('firstObject', firstObject);
// console.log('secondObject', secondObject);

/**
 * Value vs Reference as function arguments
 */

// value type
// let count = 5;

// function increment(count) {
//   ++count;
//   console.log('count inside funtion', count);
// }

// increment(count);

// console.log('count:', count);

// // reference type
// let countApple = { apple: 5 };

// function incrementApple(countApple) {
//   ++countApple.apple;
//   console.log('countApple inside funtion:', countApple);
// }

// incrementApple(countApple);

// console.log('countApple:', countApple);

/**
 *  Cloning an Object
 */

/// for-in-loop
// const fruitBasket = { apple: 5, peach: 10, tomato: 7 };

// const newFruitBasket = {};

// for (let fruit in fruitBasket) {
//   newFruitBasket[fruit] = fruitBasket[fruit];
// }

// console.log('newFruitBasket:', newFruitBasket);

// / Object.assign
// const fruitBasket = { apple: 5, peach: 10, tomato: 7 };

// const newFruitBasket = Object.assign({ mango: 15 }, fruitBasket);

// console.log('newFruitBasket:', newFruitBasket);

// / Spread oeprator
// const fruitBasket = { apple: 5, peach: 10, tomato: 7 };

// const newFruitBasket = { mango: 15, ...fruitBasket, orange: 10 };

// console.log('newFruitBasket:', newFruitBasket);
