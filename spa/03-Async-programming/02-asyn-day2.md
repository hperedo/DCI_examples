# SPA - Async - Day2


- Last time we looked at
  - Promise basics

  - Today we will look at
  - More promise stuff
  - Error handling


  ## Mini definition 


- Blocking operation : the browser can't do anything while it runs
  - `<script>` 
- Non-Blocking operation: the browser can do anything while it runs

 - `<script>`


- Synchronous operation: we wait for it to run
 - `console.log("Potato")`
 Asynchronous operation: we can do stuff while it runs

 - `setTimeout(...)`

 ## Simplifying Asynchronous Code


- What is a scope in JS?
- Problems with promises
  - Scoping variables makes code callback-heavy
    - This can cause an endless chain of promises


- There is a better, more modern way to use promises
  - Called async/await

  ```js

    const users = await getUsers()
 
  ```


- Top-level await works:
      - directly in the browser console
      - inside modules
      - in the Node REPL

      - Note : you can use "await" only inside an "async" function
  - Using await directly in your .js type module or console browser is called top-level await


- Note 2: async functions **always** return a promise




## Runtime errors

- A reject is an error, right!
  - Remember seeing "uncaught" in the console?
  - `.then` we `.catch(...)` the error?
  - With `async/await` (and other stuff too...) we use `try..catch`
