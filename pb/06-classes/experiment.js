

const buddy = {
    name: 'Tintumon',
    height: 130,
    age: 13,
    talk(text) {
      return `Hey you! ${text}`;
    },
  
  };
 
  for (cat in buddy) {
    // console.log(cat)

    // console.log(buddy[cat])
    console.log(buddy[cat]);
  }
  
//   for (key in buddy) {
//     console.log(key, buddy[key]);
//   }





//   console.log(buddy.cat)



//   Write a function convertObjectToArray
// It should return a nested array of key value pairs.

// See the example below.

// Given Object

// example = {
//     "1": 10, 
//     "2": 20, 
//     "3": 30
// }
// // Expected Output:

// // console.log(convertObjectToArray(example));
// // [ [ '1', 10 ], [ '2', 20 ], [ '3', 30 ] ]




// const convertObjectToArray = (obj) =>{

// const parentArr = []

//   for(key in obj){



// const arr = [key,obj[ke]]

// parentArr.push(arr)


//   }
 
// return parentArr


// }



// console.log(convertObjectToArray(example))Create a function convertArrayData.
// Create a function convertArrayData.

// It should take an array as an argument.

// Use array methods to manipulate the data the array below.

// The first two items in the array should switch positions.

// The third item should be replaced by an item containing "milk".

// Return the changed array.

// Original Array

let beverages = ["coffee", "tea", "juice"];
// Call your function to test it, and print the result to the console.

// Expected output

// > console.log(convertArrayData(beverages));
// [ 'tea', 'coffee', 'milk' ]

const convertArrayData =(arr) =>{

const sth = arr.map((item,i) =>{

if(i== 0){

 return  arr[i+1]
}else if(i==1){

 return arr[0]

}else{

return item = "milk"

}


})

return sth

}



console.log(convertArrayData(beverages))