// import schema
import mongoose from 'mongoose'

// creating user schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number
},{collection: "users"});

// create the model, To be used OUTSIDE
const userModel = mongoose.model('users', userSchema)

export default userModel;