# SPA - Async - Day 3



- Last week
  - Async/Await
  - try...catch


```js
  
function login(e,p){

return new Promise (...)

}


const success = await login(email,password)

try{
showAmessageandRedirect(`${success} ?  Acrees granted : Denied`)

}catch(err){


    handleError(err)
}







```


- Today
  - Requests theory
  - `fetch()`
## Getting data: Fetch examples
 `fetch(<url>)`
   - Fetch returns a promise
  - The promise, when resolved, gives a Response


```js
// Fetch with .then
  fetch('https://github.com')
    .then(response => { console.log(response) })
    .catch(err => { console.log("Oh no", err) })


// Fetch with await
  const response = await fetch('https://github.com')
  
```

## HTTP Requests

- HTTP Methods repeat: GET vs. POST

  - GET is for getting stuff 

  - POST is for creating stuff (usually, but this is actually kind of flexible)


- POST requests can have a payload that they send
- GET requests don't have a payload


- https://jsonplaceholder.typicode.com/
