# Backend - Server - day 2

- Yesterday and last week 
  - npm install Express
    - `const app = express()`
    - `app.get(<path>, <callback>)`
    - `app.listen(<port>, <callback>)`

    - Debuggenig
    - node fs/filesystem
    - nodemon

    - This week
    - POST requests
    - Middleware
    - Routing
    - Environment/deploying

    - Today

      - We will learn tools around Node and Express
          - curl
          - Rest Client extension
          - fetch (axios for node version <18)
          - POST requests

  ## So what kind of stuff can a backend do?
     - Securely save and load data
     - Read&Write files
     - Create fetch requests so the implementation is hidden from the browser

     - Automate/perform tasks while there is no browser or user
     - The backend (usually) never sleeps :)

    ## Saving, loading and handling data   

    1. Memory ---- done
    2. Files  ---- done
    3. Databases -- ??


    ## Quick requests with curl

    - Command line tool that can be used to create requests
    - Example commands:
    
     ```sh
    $ curl http://localhost:3000
    $ curl http://localhost:3000/pet
    $ curl -v http://localhost:3000/pet    # -v == verbose, shows more info
    $ curl --help
    $ man curl
  ```

  ## GET request with fetch in express


  ```js

   fetch('https://jsonplaceholder.typicode.com/todos/1',)
   .then(respones => respones.json())
   .then(result =>res.send(result))
   .catch(err => console.log(err.message))


  ```
 ## POST Requests


```js


      const newUser = {name:'toooomatoooot', pass:"12545"}
         

         const config ={
            
            mehtod: "POST",
            body : JSON.stringify(newUser),

            headers:{

             "Content-Type":"application/json"
              
            }
            
            
         }
       
       fetch('http:lcoalhost:8000/user',config)
       .then(response => response.json())
       .then(result => console.log(result))












```


  