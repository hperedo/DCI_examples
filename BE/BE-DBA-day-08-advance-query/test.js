import mongoose from "mongoose";
import dotenv from 'dotenv'
import {log} from 'console'
import util from 'util'
dotenv.config()
import Students from './models/students.js'
mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ro2kvsc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(()=>{
    log("Connected To MongoDB.")
}).catch(error=>{
    log(error)
})

// 1. SELECT name From students WHERE address.state = "Rhineland-Palatinate";
// let x = await Students.find({"address.state": "Rhineland-Palatinate"}, {name: 1, _id: 0}).count()

// 2. SELECT name, age FROM students WHERE age = 26;
// let x = await Students.find({"age": 26}, {name: 1,age: 1, _id: 0})

// 3. SELECT name FROM students WHERE name LIKE 'jo';
// let x = await Students.find({name: /Jo/i}, {name: 1, _id: 0})

// 4. SELECT address.state FROM students ORDER BY address.state ASC;
// let x = await Students.find({}, {"address.state": 1, _id: 0}).sort({"address.state": 1})

// 5. SELECT name, age FROM students WHERE address.state = "North Rhine-Westphalia" AND age = 26;
// let x = await Students.find({"address.state": "North Rhine-Westphalia", age: 26}, {name: 1, age: 1, _id:0})
// let x = await Students.find({$and: [{"address.state": "North Rhine-Westphalia"}, {age: 26}]}, {name: 1, age: 1, _id:0})

// 7. SELECT name, age FROM students WHERE age > 27;
// let x = await Students.find({age: {$gt: 27}}, {name: 1, age: 1, _id: 0})

// 8. SELECT name, age FROM students WHERE age <=19;
let x = await Students.find({age: {$lte: 19}}, {"skills._id": 0, "_id": 0, __v: 0})

log(util.inspect(x, {showHidden: false, depth: null, colors: true}))
// log(x)
// let arr = [1,5,9,6,5,9]
// to delete duplicated items from array
// arr = [...new Set(arr)]
// log(arr)