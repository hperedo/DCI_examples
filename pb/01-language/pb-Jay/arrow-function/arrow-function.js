


//// what is pure function and side effect function 

// const discount =10
// function calc(totalSell, discount){



// }


// calc(1745,discount)




//////// console.log() ///////////



// console.log(arr)



// function calcAge(thisYear,birthYear){  ///// let thisYear = 2022

//     let arr =[]
// let finalResult ;





// const age = thisYear - birthYear

// if(age>18){

//  arr.push(age)

// finalResult = arr

// }else{


//     finalResult = false
// }


 


// return finalResult


// }



// //   console.log('2022''1992')

// const userAge =  calcAge(2022,2015)

// console.log(userAge)




//////// arrow functions ////////
// function calcAge(thisYear,birthYear){ 

// const calcAge = (firstName,lastName) => { return `hello ${firstName}  ${lastName}`}

// const calcAge = (firstName,lastName) => ( `hello ${firstName}  ${lastName}`)


// let result =  calcAge('Mohammad', 'Bayasi')

// console.log(result)



// const calcAge = (currentYear,birthYear) => {


//     const age = currentYear - birthYear ;

// let finalResult;

//     if(age>= 18){

// finalResult = `hey ur age is ${age} , u r allowed to get in!`

//     }else{

// finalResult = `hey ur age  is ${age} , u r not allowed to get in !`

//     }


// return finalResult


// }


// let result = calcAge(2074,1992)

// console.log(result)



////create a func that takes an array as argument and returns the all elements from that array in one line of string .

// const strFromArr = (arr)  =>   arr.join(" ") 


// const result =   strFromArr([4,'jfdhf',true,9])
// console.log(result)

////create a func that takes an string as argument and returns an array from that string . ' hello world' => ['hello','world']



// const arrFromString = str => str.split(" ")


// let result =  arrFromString('hello world i am the best,programmer in the world')

// console.log(result)\


// Create a function that takes an array of  integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.



// const filterArr = arr =>{

// let filteredArr =[]

// for (let i = 0; i < arr.length; i++) {

    
// if(typeof arr[i] === 'number' && arr[i]>= 0){

// filteredArr.push(arr[i])


// }


// }

// const sortedArr = filteredArr.sort((a,b)=>a-b)

// return sortedArr
// }


//  const result =  filterArr([-1, 2,1,24,6,87, "a", "b"])

//  console.log(result)


// const half = (number) => [Math.floor(number /2), Math.ceil( number / 2)]


//  let result = half(8)
//  console.log(result)


function tuckIn(one, two) {
    one.splice(1, 0, ...two);
    console.log(one);
  }
  tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
  tuckIn([15, 150], [45, 75, 35]);
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  );
  tuckIn(["hallo", "sahara"], ["from", "the", "weastern"]);



 