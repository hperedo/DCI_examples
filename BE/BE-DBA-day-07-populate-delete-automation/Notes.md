# Backend - Database Advanced - Day 7

- Yesterday
  - Subdocuments
  - Relations


- Today
  - Continuing with the same project
  - Relations 2 - Mongoose Middleware
  - Relations 3 - Population

## Relations 2: Mongoose Middleware


- References to deleted entities in database? Eww!
- Deleting relations using Mongoose middleware


> Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level

> https://mongoosejs.com/docs/middleware.html

- So you declare middleware directly into the Schema
- Middleware can for example run "pre"; meaning before some operation
- Middleware can also run "post"; meaning after some operation


- As you know Many Mongoose operations return a Query
- Queries can work like Promises, but they are not promises
  - Queries have a .then() function, that's why they can be used like a promise

- You can prepare a Query in multiple steps, for example
  - `const query = User.find({ email: "Jay@example.org" })`

- You can execute a Query intentionally by calling `.exec()`
  - `query.exec()`

## Relations 3: Populate and Select

- As you know Many Mongoose operations return a Query
- You can execute a Query intentionally by calling `.exec()`

- If you Schema has a relation to another Schema (meaning a `ref`)
  - You can "populate" that ref field with the data of the related document