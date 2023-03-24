import mongoose  from "mongoose";
import Question from "./Questions.js";
import { hash  } from "bcrypt";

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
password :{type:String , required},
mainAd:{ type :AddressSchema,required},
altAd:[AddressSchema],
questions :[ {type:Schema.Types.ObjectId ,ref:'question'}]


},{ toJSON: { 
   
    transform: function (doc, ret) {
   
      delete ret.password;
      return ret;
    }

  }, timestamps: true })


UserSchema.post("deleteOne",async function(){

const id = this.getQuery()._id

await Question.deleteMany({author:id})

})


UserSchema.statics.register = async (userData)=>{

const hashed =  await hash(userData.password,3)
userData.password= hashed

return User.create(userData)
console.log(userData, hashed)

}

const User  = model('user',UserSchema)


export default User