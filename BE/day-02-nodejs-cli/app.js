// console.log("Hey, this is the app.js file!");
let arr = [1, 2, 3, 4, 5];
console.log("Starting")
// F5 to start debugging
// define a function to return  the sum of the array
function findSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        console.log("\x1b[31m" +  i + "\x1b[0m")
    }
    return sum;
}

let sumOfArr = findSum(arr);
console.log(sumOfArr);

// const d = document.getElementById("h")
// alert("Hi")
// NO Document Object Model in Node.js
// No window object in Node.js



// console.log(process)

console.log(process.argv)