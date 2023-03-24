/************
 ******** for-of loop // modern way of looping through an array
 */

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

// for (let eachAnimal of animalsArray) {
//   console.log(eachAnimal);
// }

/**
 * ***** pushMany method
 */

// const shoppingCart = {
//   shirt: 5,
//   pant: 3,
//   shoes: 1,
//   bag: 5,
//   push(item, quantity) {
//     this[item] = quantity;
//   },
//   pushMany(itemsArray) {
//     for (let item of itemsArray) {
//       //   let key = Object.keys(item)[0];
//       //   console.log(key);
//       //   ////////////////
//       //   let value = Object.values(item)[0];
//       //   console.log(value);
//       //   ///////////////////
//       //   this[key] = value; //=> shoppingCart['watch'] = 2
//       this[Object.keys(item)[0]] = Object.values(item)[0];
//     }
//   },
// };

// shoppingCart['shirt'] = 6;
// shoppingCart['sun glass'] = 6;

// // shoppingCart.push('watch', 1);

// shoppingCart.pushMany([{ watch: 2 }, { umbrella: 1 }, { hat: 3 }]);
// console.log(shoppingCart);

/**
 * for vs for-of
 */

// let numbersArray = [];

// for (let i = 0; i <= 10; i++) {
//   numbersArray.push(i);
// }

// console.log(numbersArray);

// for (let number of numbersArray) {
//   console.log(number);
// }
