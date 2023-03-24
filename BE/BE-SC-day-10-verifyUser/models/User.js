import mongoose, { model} from 'mongoose';

// define the schema
const UserSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
},{collection: "users"});

// define the model
const User = model('User', UserSchema);

export default User;