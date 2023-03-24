////// write a func that takes an array of nums and returns sum of all elements

////////// reduce takes an array and returns a single value based on what u r doing in callback function => single value could be and `[],{},number,string,boolean ... `

const arr = [4, 6, 7, 3, 8, 2];

const sum = arr.reduce((prev, curr) => {
  // console.log(prev,curr)

  return prev + curr;
}, 20);

//  console.log(sum)

///write a function that takes an array and multipys all elems in  that array and retuns tha last result

const arr2 = [4, 2, 6, 7, 1];

// const muliplyAll= (array)=> array.reduce((prev,curr) =>   prev * curr ,1)

// console.log(muliplyAll(arr2))
// const people = [
//     {
//       name: "Tim",
//       age: 18,
//     },
//     {
//       name: "Jules",
//       age: 23,
//     },
//     {
//       name: "Annie",
//       age: 5,
//     },
//     {
//       name: "Rob",
//       age: 8,
//     },
//   ];

// use the reduce method to calculate the sum of all ages in the array
// const {age,name} ={name:"humberto",age :37}
// console.log()
// const sumOfAges = (arrOfObj)=> arrOfObj.reduce((prev,curr) => prev +curr["age"],0 )

// console.log(sumOfAges(people))

// use the reduce() method to get an array of objects  returns an object {tim :18 , JUles : 23 , annie : 5 , rob :8   }

//  console.log(sth)
// const objectNames = (arrOfObj) => {
//     const result = arrOfObj.reduce((item, curr) => {
//       item[curr.name] = curr.age;
//       return item;
//     }, {});

//     return result;
//   }

//   console.log(objectNames(people));

const numbers = [5, 30, -4, 4, -20, 80];

///////sort() also is an array method that like other methods of array takes a function a parameter and sorts an array .

//  const sorted =  numbers.sort((a,b) => b - a)

//  console.log(sorted)

/**
 * Reduce recap
 */

const products = ['Shirt', 'Jeans', 'Jeans', 'Shoes', 'Shoes', 'Hat', 'Jeans'];

/**
 * use the reduce() method to return an object with each item and its quantity
 * as shown below.
 *
 * {
 *  Shirt: 1,
 *  Jeans: 2,
 *  Shoes: 3,
 *  Hat: 1
 * }
 *
 */

const result = products.reduce((acc, currentValue) => {
  if (acc[currentValue]) {
    acc[currentValue] += 1;
  } else {
    acc[currentValue] = 1;
  }
  return acc;
}, {});

console.log(result);
