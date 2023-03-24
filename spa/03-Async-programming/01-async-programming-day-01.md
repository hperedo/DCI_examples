# SPA - Asyncronous Programming - Day 1

## Introduction: The request response cycle - Client perspective

- Blocking vs. Non-Blocking code

  - `prompt("Tell me your name")` is blocking

  - `setTimeout()` is not blocking



  - Let's see two non blocking functions that SIMULATE doing stuff

    ```js

     <!-- const users =[]

     function addUser(){

      setTimeout(()=>{

        users.push("Emmanuel")
        console.log("heey, the user is added!!")

      },Math.random() * 2000)


        

     }


     function deleteUser(){

     setTimeout(()=>{
      users.pop()
      console.log("the user is deleted!!")

     },Math.random()* 5000)


     

     }


     addUser() -->


    ```

    - Race condition
      - This is a bug caused by things happening in some unexpected order

      ### Solution: Promises
  - Promises help us wait for something to be   completed, without blocking

    - You can store promises in a variable

    - At first a promise is pending

    - You wait for the promise to be completed and then do something


- A promise can have three states

   - Pending

   - Fulfilled (aka resolved)

   - Rejected

   - Like in the real world :)
     
     - Jays PROMISES to do the dishes today
        
     - At first, the promise is pending --> it will succeed OR fail

    - If it succeeds, then we will go for a long walk on the beach


    - If it fails, the situation must be handled by doing the dishes tomorrow

    - In JavaScript, you make promises like this
    - The promise takes in a function
      - `const promise = new Promise(() => {})`


      - This function takes in "resolve" and "reject"
  - These two are responsible for the promise succeeding or failing

  ```js
  

     function addUser(){

     return new Promise((resolve,reject)=>{

    
      setTimeout(()=>{
        const randomNUm = Math.random() > 0.5

        if(randomNUm){
         users.push("Emmanuel")
        
        resolve("yeeeee,  the user is added!!!")
       

        }else{


            reject("upps,not able to add user!!!")
        }
       
      },Math.random() * 10000)


        


    })


     }

   

      function deleteUser(){

     return new Promise((resolve,reject)=>{

         
        setTimeout(()=>{

            const randomNUm = Math.random() > 0.5

            if(randomNUm){

                users.pop()
              resolve("uhuuu, one user is deleted")

            }else{

                reject("failed to deletre a user")
            }
      
     },Math.random()* 5000)


     


      })
     
    }

     addUser()
    .then((result)=>{

      console.log(result)
      return deleteUser()
     
    }).then((result)=>{

     console.log(result)

    }).catch((error)=>{
       
       console.warn(error)

    })
   
     ///.then() is refering to resolve from promise which is coming from server
    ////.catch() is refering to reject from promise whci is coming from server




    const pd = deleteUser()
    
    pd.then((result)=>{

       console.log(result)    

    
    }).catch((err)=>{
     
     console.warn(err)

    })


  ```