import dotenv from 'dotenv'
import mongoose from "mongoose"
import Animal from './models/Animal.js';
dotenv.config() 



// START to connect to our database
mongoose.set('strictQuery', true);

mongoose.connect(process.env.CONNECTION_STRING)
.then( ()=>   console.log("[DB]  Connected ") )
.catch(err=> console.log("[DB]   error connecting, " ,err ))

///
// Using a model to create a document into our MongoDB with an instance

    // const newAnimal =   new Animal({
    //     name :"Mylo",
    //     age:99999
    // })
    // newAnimal.save()

    // console.log(newAnimal)

    // Using a model to create a document into our MongoDB with a static function

    const newAnimal =await Animal.create({name :"Mylo",age:99999})
    // console.log(newAnimal)


const animals = await Animal.find({})
console.log(animals)
