
import getUsers from "./02-async-day2-users.js";








 const ul = document.querySelector("ul#users")








 try {


    const usersP = await getUsers()
    
    usersP.forEach(user => {
    
       const li = document.createElement("li")
    li.innerText = user.name
   ul.append(li)
    });
    
     
    



    
 } catch (error) {
    
    
const h1 = document.createElement("h1")

h1.innerText ="hey sth wrong , try again"

ul.append(h1)


console.log(error)
 }
    

    















// async function sth (){
// const usersP = await getUsers()
//  const ul = document.querySelector("ul#users")
// usersP.forEach(user => {

//    const li = document.createElement("li")
// li.innerText = user.name
// ul.append(li)
// });
// }

// sth()















// const arr= [3,5,3,6,3,7]
// const h1 = document.createElement("h1")

// h1.innerText = "hey i am here H1"

// ul.append(h1)

// arr.forEach(num =>{

// const li = document.createElement("li")
// li.innerText = num
// ul.append(li)

// })


// console.log(ul)