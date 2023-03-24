import mongoose from 'mongoose'

// define the user Schema:
const userSchema = new mongoose.Schema({
    name: {type: String, maxlength: 20, minlength: 3},
    email: {type: String, unique: true},
    age: {type: Number, min:18, max: 30},
    password: {type: String, required: true},
    phone: String,
    address: {
        state: String,
        city: {type: String, maxlength: 20}
    },
    skills: [{type: String, minlength: 1}]
},{collection: 'users'});

// define the userModel // DOCUMENTATION
const userModel = mongoose.model("Users", userSchema);

// To enable use outside
export default userModel;