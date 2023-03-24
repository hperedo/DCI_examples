import mongoose from "mongoose";

const { Schema, model } = mongoose;


const avatarSchema = new Schema({

  originalname :{type:String,required:true},
  mimetype:{type:String,required:true},
  filename:{type:String,required:true},
  path:{type:String,required:true},
  size:{type:Number,required:true},
})

const userSchema = new Schema({
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, minLength: 8 },
  name: { type: String, required: true, trim: true },
  avatar:{type: avatarSchema, required:true},
  
  messages: [{ type: Schema.Types.ObjectId, ref: "message" }],
},{
  toJSON: { 
  
    transform: function (doc, userObj) {
     
      delete userObj.password
      delete userObj.__v
      return userObj;
    }
  }
})

const User = model("user", userSchema);

export default User;
