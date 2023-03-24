import mongoose from 'mongoose';
import dotenv from 'dotenv'
import {log} from 'console'
// import students model
import Students from './models/students.js'

// enable to read .env file
dotenv.config();

// to disable warning of strictQuery in V^6
mongoose.set('strictQuery', false);

// Create Connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ro2kvsc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(()=>{
    log("Connected To MongoDB.")
}).catch(error=>{
    log(error)
})

// ################## Start Querying


// 1. get All Students
// in SQL
// SELECT * FROM students;
// in async/await (FUNCTION MUST BE async)
// const allStudents = await Students.find();
// // promise
// Students.find().then(st=>{
//     log(st)
// }).catch(err=>{
//     log(err)
// })
// // callback
// Students.find({}, (error, data)=>{
//     if(error){
//         log(error)
//     }else{
//         log(data)
//     }
// })
// log(allStudents)

// 2. SELECT * FROM students LIMIT 10;// th Results
// const topTen = await Students.find().limit(10)
// log(topTen)

// 3. SELECT name FROM students;
// const studentsNames = await Students.find({}, {name: 1, _id: 0})
// log(studentsNames)

// 4. SELECT name, age FROM students;
// const namesAndAge = await Students.find({}, {name: 1, age: 1, _id: 0})
// log(namesAndAge)

// 5. SELECT name FROM students ORDER BY name ASC|DESC;
// .sort({fieldName: n})// where n: [-1, 1]// -1 Decreasing
// const sortingNames = await Students.find({}, {name: 1, _id: 0}).sort({name: 1})
// log(sortingNames)

// SELECT name, age FROM students ORDER BY age ASC;
// const studentsAgesOrdered = await Students.find({}, {name: 1, age: 1, _id: 0}).sort({age: 1}).limit(5)
// log(studentsAgesOrdered)

// ####################### Filtering
// 1. SELECT name, age FROM students WHERE age = 18;
// const students_18 = await Students.find({age: 18}, {name: 1, age: 1, _id: 0})
// log(students_18) 
// SELECT name, age FROM students WHERE name = 'Leta Davis' AND age= 18;
// const x = await Students.findOne({name: "leta Davis", age: 18}, {name: 1, age: 1, _id: 0})
// log(x)
// SELECT name, age FROM students WHERE name LIKE 'Leta Davis' AND age= 18;
// const x = await Students.find({name: /z/i, age: 18}, {name: 1, age: 1, _id: 0})
// log(x)

// SELECT age, address FROM students WHERE age = 19 OR state = "Bavaria";
// let x = await Students.find({$or: [{age: 19}, {"address.state": "Bavaria"}]})
// log(x)
/*
 .find({$OPERATOR: [{FILTER_1}, {FILTER_2}, ..., {FILTER_N}]})
*/

// Operators AND, OR, NOT
// all students, where leving in "Bavaria" or in "North Rhine-Westphalia"
// SELECT name FROM students WHERE address.state = "Bavaria" OR address.state = "North Rhine-Westphalia";
// let x = await Students.find({$or: [{"address.state": "Bavaria"}, {"address.state": "North Rhine-Westphalia"}]}, {"name": 1,"address.state": 1, _id: 0})
// log(x)

// All Students how NOT living in Bavaria
// SELECT name From students WHERE address.state NOT "Bavaria";
// let x = await Students.find({"address.state": {$not: {$eq: "Bavaria"}}}).count()
// log(x)


// criteria chain ($eq, $gt, $gte, $lt, $lte)
// All students the age greater than 25
// let x = await Students.find({age: {$gte: 25}}, {age: 1, _id: 0})
// log(x)

// SELECT age FROM students WHERE age > 24 AND age < 29 AND address.state = "Bavaria"; (24, 29) ]24, 29[
let x = await Students.find({$and: [{age: {$gt: 24}}, {age: {$lt: 29}}, {"address.state": "Bavaria"}]}, {age: true,name: true, _id: false})
log(x)
