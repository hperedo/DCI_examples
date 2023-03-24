


// // what is an intiger?  745 893757 59359 9548   !!!31564.3534 

// ///what is a floating number?  2321544.8737454 PI, 3.14   


// // what does parseInt mean?



// const stringNum = "534553"


// // console.log(parseInt(stringNum))


// const stringFloat = "3.94" //////why from where parseint knows that this is decimal i dont want it?

// const sth =parseFloat(stringFloat)

// // console.log(sth)



// /////////////////// Math Object and methods ////////////////



// const ceilingNum =   Math.ceil(4.99999999)    ///rounding up 


// const floorNum =  Math.floor(4.9999999999999999)     /////rounding down




// const roundNum = Math.round(4.5)       ////// returns to the nearest intiger 


// const minNum = Math.min(2,6,85,0,-4,39,-100,3)    //// RETURNS THE SMALLEST NUMBER

// console.log(minNum)

// const maxNum = Math.max(2,6,85,0,-4,39,-100,3) //////// returns the largest number

// console.log(maxNum)



// /////////////////////  NaN ////////////////////////  NOT A NUMBER
 


// const test = isNaN(169845893476)      /////////

// const sth2 =    "hello"/7  ///////////////which type of data is it?




// /////////////////toFixed()

// const randomNum = Math.random() *100 //////// returns a random num between 0 (inclusive)   and 1 (exclusive)
// ///////0
// /////9.999999999999
// const someThing = Math.round(randomNum)

// const fixedTest = randomNum.toFixed(2)


// console.log(randomNum, fixedTest)
//  const toFixedNumF =parseFloat(randomNum.toFixed(2) )    ////// this makes it to A string 
//  const toFixedNumI =parseInt(randomNum.toFixed(2) )    ////// this makes it to A string 
// console.log(toFixedNumF,toFixedNumI)

//  /////write a code that returns a random number between 0 and 10 and also it retruns randomly 0
 

// //  console.log(randomNum , toFixedNumF,toFixedNumI)



// const test2 = 2 * (4 +3) /2    ///7   ///
// // 8 + 1.5 =9.5

// /////prioority if we have parantesisi is paranthesis tehnn    priority is multiplying  then dividsion then +-

// console.log(test2)

// const sum = 100;
// const num = 1;
// // const divisor = num <= 1 ? 1 : num || num >= 10 ? 10 : num






// console.log(4==4)




// const arr = [1,8,5,7,82,14]

// const pushedSth =  arr.push(100)

// /////  "18278214"
// // const testToString =arr.toString()
// // const toStringArr= arr.join("7")
// const splicedArr = arr.splice(2,5)

// console.log(arr, splicedArr)



const arr = [1,2,8,14,35,64,7,23]

const randomNum = Math.round(Math.random() * 100)

const day  = 'saturday'
// console.log(randomNum)
// switch(true){

// case randomNum < 10:
//     console.log(`the random number is less than 10 and its =>  ${randomNum}`)

// break;

// case randomNum >= 10 && randomNum <50:
//     console.log(`the random number is between 10 and 50 and its =>  ${randomNum}`)
// break;
// }



for(let  i=0 ; i<3;i++){  /// i =0
////do somethings 
console.log('hello this is the loop running and the i now is ' + i)


} ///i++

const num = 3

const expo = 3

let result =1 ///3
for (let i = 0; i < 3; i++) {
   
    result *= 3 
    console.log(result)
}/// i++
// console.log(result)a
