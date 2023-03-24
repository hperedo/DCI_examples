# Backend - Server - day 7

- Yesterday we talked about what is a Middleware


- Today we will have

  - Some theory: what _is_ a REST API?
  - New HTTP methods
  - Continuing on our messageBoard
  - Deploy our fullstack :)


## Let's talk about REST / REST APIs a bit more


- Relies heavily on the fundamentals of HTTP


REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web. making it easier for systems to communicate with each other  REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.

 https://www.codecademy.com/articles/what-is-rest

 - More info: https://restfulapi.net/

 - Client and Server are independent and separated

  - The Server doesn't know or care about the state of the Client
  - The Client doesn't know or care about the state of the Server


- All that matters is what is included in each separate Request and Response

- No state is assumed between requests, all relevant information is in the Req/Res


- With REST, the things we are accessing and transferring are called resources
  - User, TODO Item, Post, Comment...


- Clients make requests to the server to get or modify data on the server


- A request consists of

  - the HTTP verb (method), which defines what kind of operation to perform
 
    - GET — retrieve a specific resource or a collection of resources
    - POST — create a new resource  // 
    - PUT — update a specific resource
    - PATCH — update a specific resource
    - DELETE — remove a specific resource
    - You will probably run into OPTIONS too


  - a path to a resource (URL): `/users` or `/posts` or `/users/15`
  - optionally a header or headers that contain information about the request
  - optionally a request body containing data (POST, PUT, PATCH)
  

```js
{
    name:"emmanuel",
    email:"eemaunel@gmail.com",
     
}

{

     name:"emmanuel",
    email:"em@gmail.com",

}


```


- PATCH vs PUT

  - In a perfect scenario; PUT will replace an resource with an updated one
  - In a perfect scenario; PATCH will modify an resource with the details included in the request (just a part of resource)

- Usually data is transmitted as JSON

```js
fetch(url,config)
```
- Good RESTful APIs make heavy usage of HTTP Status codes

  - Most important HTTP status codes
     - 2xx -- Successful response
     - 200 "OK"
     - 201 "Created"
   - 3xx -- Redirects                                                         www.jaysshop.com    => JAYSSHOP.COM/blog/1
     - 301 "Moved Permanently"                      JAYSSHOP.COM/articles/1
     - 302 "Found" —> "Moved Temporarily"

    - 4xx - Client error
          - 400 "Bad Request" — JSON: `{ "id": 6, kittens: true  }`
          - 401 "Unauthorized" — you are not logged in
          - 403 "Forbidden" — you are not allowed do something       
          - 404 "Not found"
          - 418 "I am a teapot"

     - 5xx - Server error
      - 500 "Internal server error" — something went wrong processing the request



- RESTful APIs generally have endpoints like this:
  - GET    /users                 - Gets all users
  - POST   /users                 - Creates a new user
  - GET    /users/:id             - Gets a single user
  - PUT    /users/:id             - Updates a single user   {}
  - DELETE /users/:id             - Deletes a single user

