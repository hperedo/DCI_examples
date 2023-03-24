


////////  if and else 



// if(conditions){

// ///here is telling what to do


// }else if(diferentCondistions ){
// ////what to do 



// }else{

// ///what to do

// }



/////



// if(guests.includes(givenName)){  ///// here whatever u write as condition dosent matter if false or true ,the only thing is matter that met ur conditions


// console.log(`hey ${givenName} welcome to our party u r allowed  to get in .`)

// }else{


// // console.log(`hey ${givenName}  u r not allowed to get in sorry! ` )

// }





////  ''  falsy

//// 0 =>     falsy


//// undefined =>  falsy

//// null =>  falsy 
///NaN  =====>  falsy


 




/////// first if the guest is in the guest list then we should check the age of the guest bigger than 18 if yes he or she is allowed to get in

//////if the guest is not in  the list , check the age if its above 18 , he or she should pay to get in 


//// if the guest is not in the list neither  above 18 then the guest is not allowed to get in at al!




// if(guests.includes(givenName)  && age>=18){



//     console.log(`hey get in ${givenName}`)
// }else if(age>=18 ){


//     console.log(' u have to pay 25 euro')
// }



// else{


// console.log(' u  r not allowed')

// }







////// block scope vs global scope



// {

// // let age = 25


// console.log('this is in blcok scope '+ age)  ///error

// }




// console.log(age)

const guests = ['Humberto','Sarina','Diouani','Rana','Mohammad']

const givenName = 'Agatha'

////// if a or b  =>   


const kidScore =    'z'     ////// a, b, c , d ,f 

if(kidScore ==='a' || kidScore==='b'  ){


console.log('good job kid u get a car')

}else if (kidScore === 'c'){


console.log('good job but nop car maybe card')

}else {


console.log('no car no  job')

}



///  if its sunny  ? 'go out'  : 'stay at home'

/////between 11  and 15  return true else false

// const number = 16


// if(number>=11 && number<=15){

// console.log(true)

// }else{


//     console.log(false)
// }


// const prob = 0.2

// const prize = 20

// const pay = 9



// if(prob * prize > pay){


// console.log(prob*prize ,true)

// }else{

//     console.log( prob* prize,false)
// }

// const number = 200

// if(number % 100 === 0){

// console.log('yes it is divisble by 100', number % 100)

// }else{

// console.log('nope its not', number % 100)

// }



// const str1 = 'Anas'
// const str2 = "Teng"


// if(str1.length === str2.length){


//     console.log('yes they are equel', str1.length)
// }else{


//     console.log('nope', str1.length,str2.length)
// }





/////// write an algorith that takes a number if its divisble by 3 => return fizz
/////// if its divible by 5  => return fuzz 

//// if its divisble by 3 and 5 =>  return fizzFuzz

/////otherwise return that number 