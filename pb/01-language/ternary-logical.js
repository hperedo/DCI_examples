//////////////////////////////////// Pitfalls ////////////////////////////////////////
///////////////// Pitfall -1. Rounding large Numbers
//console.log(Math.ceil(10.00000000000000006)); // Expected 11 but the result is 10

////////////////// Pitfall - 2. NaN
// let value = NaN;
// console.log(typeof value); // number

///////////////// Pitfall - 3. ToFixed() method rounding
// number = 45454543.26274587;
// console.log(number.toFixed(3)); // 45454543.263

///////////////// Pitfall - 4  Division by zero, typeof infinity is number
// const sum = 100;
// const divisor = 0;
// const result = sum / divisor;

// console.log(result); // infinity
// console.log(typeof result); // number
//
//
///////////////////////////////////// Ternary Operator (Conditional)///////////////////////////////////////
const cloudy = false;

// condition ? exprIfTrue : exprIfFalse;
// cloudy ? "something happens" : "some other things happens";

// const umbrella = cloudy ? "Take Umbrella" : "Do not take Umbrella";
// console.log(umbrella);
//
//
//////////////////////////////////// Logical Operators /////////////////////////////////
// We use logical operators to make decision based on multiple conditions
// For example,
// If we have money and time, then we go to Hawaii or else we will not go.

///////////////// Logical AND (&&) //ampersand
const money = true;
// const time = false;

// const Hawaii =
//   money && time ? "Going to Hawaii, woohoo!!" : "Not going to Hawaii :(";

// console.log(Hawaii);

// console.log(true && true);

// ///////////////// Logical OR (||)
// // If Jay or Chandu is Present, There will be lectures or else it's a holiday

// const jay = false;
// const chandu = false;

// const lectures = jay || chandu;
// console.log("lectures: ", lectures);

// console.log(false || false);

// ///////////////// Logical NOT (!)
// const output = !true;
// console.log(output); // true

//////Example of logical not////
// const goingToHawaii = money && !lectures;
// console.log(goingToHawaii);

//////////////////////// Challenge //////////////
// const sum = 100;
// const num = 5;

// Allowable num range is from 1 to 10 //// num should be between 1 and 10, inclusive of both
// If num below 1, use 1.
// If num above 10, use 10.
// If num is between 1 and 10, use the num itself.
//
//////////// Solution /////////
// let divisor = num >= 1 && num <= 10 ? num : num < 1 ? 1 : 10;
// let result = sum / divisor;
// console.log(result);
//
/////// Sample outputs /////
// num = 5; // result = 20
// num = 3 // result = 33.3333
// num = -5 // result = 100
// num = 15 // result = 10

///// ('$$$')  /// You have found the secret tresure!! Well done guys :)

////////////////////// Short Curcuting //////////////////
// console.log(false || false);

// console.log(false || "Hawaii");

// console.log(false || 10);

// Falsy -> false, 0, null, undefined, '', NaN
// Truthy -> Anything that is not falsy is truthy

// const input = "";

// const currentValue = input || "deafaltValue" || 100 || true;
// console.log(currentValue);

// console.log(30 || 10);
// console.log(10 && 30);
