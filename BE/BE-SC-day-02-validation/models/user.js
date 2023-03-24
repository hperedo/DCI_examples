import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, `is already Exists!`],
        // custom validate:
        validate: {
            validator: (val)=>{
                // return true if OK, false for other cases
                // check regular expression //
                if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)){
                    return true
                }else{
                    return false
                }
            },
            message: val=>`(${val.value}) is NOT a valid email ! :(`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password Should be greater then 8"],
        maxLength: [16, "Password Should be less than 16"]
    },
    age: {
        type: Number,
        required: [true, "Age is Required"],
        min: [18, "Age must be greater than 18"],
        max: [30, "Age must be less than 30"]
    },
    married: {
        type : Boolean,
    }
},{collection: "users"});

const User = mongoose.model("User", usersSchema);

export default User;