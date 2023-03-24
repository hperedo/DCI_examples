

/*************************************************
    This file contains example commands
    It is not strictly regular JavaScript
    These are commands that are meant to be
    individually performed in the MongoDB shell
*************************************************/

/******** DATABASE COMMANDS ********/
// Switch to a database (even if it does not exist)

use myshinynewdb

// Show currently active database
db

// List all databases
show dbs


/******** COLLECTION COMMANDS ********/
// Create a new collection of documents
db.createCollection("pets")


// Show list of all collections in currently active database
show collections


// Delete a collection
db.pets.drop()

//// lest do CRUD
/******** DOCUMENT CRUD COMMANDS  ********/
// 1.  "CREATE"
// This inserts multiple 
// This implicitly creates a "users" collection; no need to create a collection separately!
// It also inserts two documents into the new collection


db.users.insertOne({name:"emmanuel" ,age:33})

const arr  =[
    { "name": "Rauli", "email": "rauli@example.cat" },
    { "name": "Veera", "email": "veera@example.cat" }
]

db.users.insertMany([
    { "name": "Rauli", "email": "rauli@example.cat" },
    { "name": "Veera", "email": "veera@example.cat" }
])

// This inserts one single document
db.users.insertOne({ name: "Alpi", email: "alpi@example.dog" })

// 2. "READ"
db.users.find() // List all documents in the users collection
db.users.find({ name: "Veera" }) // List all documents (users) that have the name "Veera"


// 3. "UPDATE"
// This searches for a document that has the name "Veera" and updates the name to "Burnt Nugget"
// The first argument is a filter; which document(s) to update
// The second argument defines what kind of update operation to do
db.users.updateOne({ name: "emmanuel" }, { $set: { name: "ekokobe" } })


// 4. "DELETE"
db.users.deleteOne({ name: "emmanuel" }) 
