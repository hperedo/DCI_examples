///////////////////////////////////////// Array /////////////
// const numbers = [1, 2, 3, 5, 6];

/////////////////// Add values in the end of the array /////////////
// numbers.push(5, 6);
// console.log(numbers);

//////////////////// Add values in the beginning of the array ////////////
// numbers.unshift(-1, 0);
// console.log(numbers);
// console.log(numbers);

//////////////////// Add something in the middle /////////////
// numbers.splice(3, 0, 4);
// console.log(numbers);

//////////////////// Access individual elements by position ////////////
const numbers = [1, 2, 3, 5, 6];
// console.log(numbers[2]); // 3
numbers[2] = "a";
console.log(numbers); // [1, 2, 'a', 5, 6]

//////////////////// Check if item exist ////////////////
// console.log(numbers.indexOf(500)); // -1
// console.log(numbers.indexOf(40)); // -1
// console.log(numbers.indexOf(2)); // 1
// console.log(numbers.indexOf(3)); // 2

//////////////////// Sorting ////////////////////////
// console.log(numbers.sort());
