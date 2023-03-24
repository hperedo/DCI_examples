



////////// map =>  its an array method and return a new array with changes of all or some elements based on call back function .


const arrayOfNumbers = [4,3,-8,0,10]

const newArr =  arrayOfNumbers.map((item, i) => item * 2)

// console.log(newArr)

//////////// we want to multiply the items that they are bigger than 4  return new array .

//  const newArrMaped =   arrayOfNumbers.map((item,i) => item > 4 ? item *2 : item )


                          

// const newArrMaped =   arrayOfNumbers.map((item,i) => {

// if(item > 4){

//  return item * 2
// }else{

//  return item
// }

// } )



// console.log(newArrMaped)



// const mixedArray = ["mylo","E05","3",8,9,"beer"]


// const newMixedArr =  mixedArray.map((item,i) => typeof item === "number" ? "Bingo" : item )

// console.log(newMixedArr)



const persons = [
  {name:"Emmanuel" ,age:48},
  {name:"Anas" , age : 40},
  {name :"Yazan" ,age : 29}
]   


// [
//   {name:"emmanuel" ,age:48},
//   {name:"Anas" , age : 41},
//   {name :"Yazan" ,age : 29}
// ]   


const newPersons = persons.map(item => item.name =="Anas" ? {...item , age :41} : item)


console.log(newPersons)


