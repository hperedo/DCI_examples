

// the concept of class was introduced in ECMA2015. 
// Internally a class is a wrapper over prototype based inheritance(methods and properties).


// constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.
// class is a syntactical sugar over prototype based object oriented programming.
// It also gives you a better encapsulation of data and methods in the same code block since all the data and methods are defined in the same code block.



// class syntax is more comparable to similar features available in Java and C++ 



// The basic syntax is:

// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
// }



class User {

    constructor(name,lastName){
/// here is going to create the object

//{
//name:"Emmanuel",
//lastNAme : "Ekokobe"
//}

   this.name = name,
   this.lastName =lastName

    }

    static sayHi(name,lastName){

    return `hello ${name} ${lastName}`
    }




}



const user1 = new User("Emmanuel","Ekokobe")
const user2 = new User("Alveena","Faisel")
// console.log(User.sayHi("Emmanuel","Ekokobe"))
// const random = new Math()

// console.log(typeof User)

// console.log(Math.pow(3,2))

// const arr = new Array()

// console.log(Array.prototype)
// console.log(user1.sayHi())




class Vehicle {

constructor(type,speed,color){
//{
//type :"dodge",
//speed:280,
//color:"black"

//}
this.type =type,
this.speed = speed,
this.color = color

}

move(){

return `the ${this.color} car is moving : with the Speed of ${this.speed} and its Brand is : ${this.type}`

}


stop(){


    return `the ${this.color}  car stopped : at the speed of ${this.speed} `
}


 static info(type,color){

return `the car has the color ${color} and its Brand is ${type}`

}


}



const car1 = new Vehicle("Dodge","100","black")
const car2 = new Vehicle("Mustang","200","darkBlue")
// console.log(car1.type)
// console.log(car1.move())

// console.log(Vehicle.info(car1.type,"red"))
// console.log(car2.move())
// console.log(car2)
// console.log(car2.info())



class Person {

constructor(name,birthYear){

this.name = name,
this.birthYear = birthYear 

}


calcAge(){
    const date = new Date()
    const currenYear = date.getFullYear()

 const age =  currenYear - this.birthYear
 return `${this.name} is ${age} years old`

}

}


const person1 = new Person("Humberto",1979)
const person2 = new Person("Mohammad",1996)

Person.prototype.tellMeYourLastName =function (){

return `tell me ur last name , ${this.name}`

}
console.log(Person.prototype)
console.log(person1.tellMeYourLastName())

console.log(person2.calcAge())

// console.log(Date.prototype)

const date = new Date()
console.log(date.getFullYear())

console.log(person1)

