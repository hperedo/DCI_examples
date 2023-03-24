import mongoose from "mongoose"
  
  const {Schema, model} =  mongoose

// This creates the Schema; "blueprint" of what data will documents contain

const animalSchema = new Schema({
name : {type: String ,required : true},
age : {type:Number  ,required :true },
dob : Date


})
// This creates a Model class using a collection name ("animalia") and a Schema

const Animal = model("animalia", animalSchema)


export default Animal