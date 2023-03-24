import mongoose from "mongoose";

// define the students schema
const studentsSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
    phone: String,
    address: {
        state: String,
        city: String
    },
    skills: [{
        skill: String,
        experience: Number
    }]
}, {collection: "students"});

// define the students model
const Students = mongoose.model("students", studentsSchema);

// export the model
export default Students;