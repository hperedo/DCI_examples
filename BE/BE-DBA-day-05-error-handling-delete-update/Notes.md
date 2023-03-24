# Backend - Database Advanced - Day 4

- so far !!
    - Started Mongoose by actually doing full CRUD!
    - What Mongoose functions did we learn?
     - `mongoose.connect(connectionString)`
     - `const { Schema, model } = mongoose`
      - this is just for removing for one new warning in the new version of mongoooooooooooose
     - `const mongoose.set({queryStrict: true})`   

     - Schema : Structure of our documents - like a bluePrint
     - Model  : the way we can interact with database/ mogodb


- Today

  - Let's livecode a new example application (REVIEW)




## Structure of our backend folder!!!
 - lib => folder fo ur general functions like `mongooose.connect()`
 - routes => all of ur routes (endpoints) comming here  
 - models =>  all of ur Schemas here
 - middlewares =>  which is all of ur middlewares 


## Code Styling or Clean Code 

- old ways is using lots of callbacks => callback HELL enjoy it :)
- new ways of handling is promises and async await => which i love :)


## New Schema options

- Unique values: `{ type: <field type>, unique: true }`



- lets just code :)