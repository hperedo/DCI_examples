import mongoose  from "mongoose";

const { Schema , model } = mongoose


const unique = true
const required = true 
const trim = true

const AddressSchema = new Schema({

street :{type:String},
city :{type:String,required},
country: {type:String ,required},
zip:{type:Number ,required} 

},{_id:false})


const UserSchema = new Schema({
username: {type: String , unique, required},
email : {type: String , unique , required},

mainAd:{ type :AddressSchema,required},
altAd:[AddressSchema],
questions :[ {type:Schema.Types.ObjectId ,ref:'question'}]


})


const User  = model('user',UserSchema)


export default User