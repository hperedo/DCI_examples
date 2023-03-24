# Backend - Database Advanced - Day 1

- Now we know the basics of databases

  - What kind there are
  - How they generally work and what are some of the main concepts
  - How to CRUD


- Now we will move to using MongoDB from our App
 - For 8 days 


 ## Introduction: ODM and ORM, abstracting the database


- These things

  - ORM: Object Relational Mapping -- Used mainly for relational (SQL) databases
  - ODM: Object Document Mapping -- Used mainly for document based databases, like MongoDB



- These are the reason why we as developers don't really write queries in our applications

- Usually they take care of the **actual** queries
- They form a layer that exists between the database and our code
- I would probably never work without an ORM/ODM


- Both of these are used so that our entire database and its data is _mapped_ to objects in our backend

  - This mapping is an abstraction; it abstracts/hides the details


- Two imaginary examples


  - SQL Table "Users" is mapped to class "User"

    - `User.create({ ... });` and that gets translated into `INSERT INTO...` by the ORM


  - MongoDB Collection "foods" is mapped to class "Food" in our backend so we can do


    - `const f = new Food({....}); f.save();`; that is transled to `db.foods.insertOne(...)`


- A good ORM/ODM does a lot of stuff

  - helps prevent injection attacks by making our queries safer by default (SQL)
  - helps with data validation
  - helps with connecting to our database too!


## Adding Mongoose


- Mongoose is an ODM for MongoDB

- Installing Mongoose into our project

` npm install mongoose`

- OK so it's connected. What can I do with it?


## Schema

- Everything in Mongoose starts with a Schema

  - They are used to connect our backend objects to the database collections/documents
  - They act as a blueprint of a document
  - They make MongoDB work much more like an SQL database
  - Because they provide a more rigid structure
  - Most developers and projects like a more rigid structure


- So schemas represent the blueprint of documents in a collection


  - They define the data types


- They are used to create a Model

  - Our Schema blueprint defines what the Model can do
  - We actually interact with Models in our application, not the Schema
  - The model is a Class which constructs documents
  - So; one model instance represents a document in the database

- If you are starting an app, one place to start might be planning the data


  - Planning our collection schema: Class diagrams


## Model


- Models and Schemas are usually defined in the same file (module)

  - Usually only the Model is exported

- Model names are capitalized and singular


Creating a model