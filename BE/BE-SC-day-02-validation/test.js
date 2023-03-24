import mongoose from 'mongoose';
import User from './models/user.js'
import dotenv from 'dotenv';

// mongoose.set('strictQuery', false)

dotenv.config()
const {MONGO_URI_LOCAL} = process.env

mongoose.connect(MONGO_URI_LOCAL).then(()=>{
    console.log('Connected to MongoDB')
}).catch(err=>{
    console.log(err)
})

// testing

let newUser = {
    name: "Mostafa",
    // email: "abc@Aaabc.abc",
    // password: "123456789",
    age: 0b0011011,
    married: true
}
// try{
//     const result = await  User.create(newUser)
//     console.log("Done")
// }catch(error){
//     console.log(error.message)
// }

// console.log(result)
User.create(newUser).then(()=>{
    console.log("Done")
}).catch(error=>{
    console.log(error.message)
})