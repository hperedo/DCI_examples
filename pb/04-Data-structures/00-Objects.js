
///keys or properties


// console.log(obj.isRaining)
// console.log(obj.lastName)



const headphonesObj ={

yearOfProduction : 2019,

    brand : 'JBL', 

    serialNum : 2354,

    numbers:[234,656,7878],

    madeIn: 'China',

    

    color : 'black',



}

headphonesObj.brand = 'Sony'
headphonesObj.serialNum = 2543545454554

headphonesObj.size = 25


// console.log(headphonesObj)

const str = 'hello ' + headphonesObj.brand + headphonesObj.madeIn

// console.log(str)

 const sentence = `hey the brand of the headphone is ${headphonesObj["brand"]} with serial Number of ${headphonesObj.serialNum} `
// console.log(sentence)


// console.log(headphonesObj)



// console.log(headphonesObj['brand'])


////accessing data inside of object

// const color = headphonesObj.color
// const sth = headphonesObj.numbers
// console.log(sth)





// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.

const box ={ width: 2, length: 5, height: 1 }

const box2 ={ width: 4, length: 5, height: 2 }

// const volumeOfBox = (sth) => {


// const result  = sth.width * sth.length * sth.height



// return result
// }



//  const volume =   volumeOfBox(box)

//  console.log(volume)



//// write a function that takes an object as argument and adds a key with firstname and the value javascript to that object and returns the whole object with new key added 



///examples => ADD({brand:sth ,lastName:'sthelse'}) =>   {brand:sth ,lastName:'sthelse' , fiistName : 'javascript'}\


const obj23432324 = {

  
    lastName :"e05" ,
    age : 4 ,
   isRaining : false
   }
   
   
//    obj.firstNAme = 'sthelse'


// obj.firstName = 'javascript'

//    console.log(obj)



const addNewKeyValue = (obj) =>{

obj.language = 'JAVASCRIPT'


return obj
}

// console.log(addNewKeyValue(box))




// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }



const fiftyThirtyTwenty = (salary) =>{

const objSalary = {}




 objSalary.Needs = salary * .5

objSalary.Wants = salary * .3


objSalary.Savings = salary * .2

objSalary.totalSalary = salary


return objSalary


}


// console.log(    fiftyThirtyTwenty(10000))
// console.log(    fiftyThirtyTwenty(13450))









// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent

// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples

// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
const testObj = {
       name: "Tokyo",
       population: "13,929,286",
     continent: "Asia"
     }

const cityFacts = (cityObj) =>{


const str = `${cityObj.name} has a population of ${cityObj.population} and is situated in ${cityObj.continent}`



    return str
}



// console.log(cityFacts(testObj))







// Write a function that returns true if a hash contains the specified key, and false otherwise.

// Examples

// hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

// hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

// hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true




// console.log(sth2.tot)

// console.log(sth2['pot'])


// const hasKey = (obj,str) => obj[str] ? true : false


// console.log(hasKey({ pot: 1, tot: 2, not: 3 },'username'))
