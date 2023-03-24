import { compare, hash } from 'bcrypt'
import mongoose from 'mongoose'


const {Schema,model} = mongoose



const userSchema = new Schema({

username:{type:String , required:true, unique:true},
password:{type:String , required:true },
role: {type: String, enum: ['admin',"student","printer"] }

}

//  ############### this is for protecting/hidding passsord from fromtENd
// , 
// { toJSON: { 
   
//     transform: function (doc, data) {
//       delete data.password;
//       delete data.__v
//       return data;
//     }

//   }, timestamps: true }
  
  
  )


////// `register` is astatic function for User Class to hash password before saving in database

userSchema.statics.register = async(userData)=>{

    const hashed = await hash(userData.password,3)


userData.password = hashed


return User.create(userData)
}


//  `login` is a static function for User class to check if the raw password which is
//  comming from request is equel to the hashed password saved in database



userSchema.statics.login = async (userData) =>{

const user = await User.findOne({username: userData.username})

if(!user) return false


const success = await compare(userData.password,user.password)


return success ? user : false

}



const User = model('user',userSchema)



export default User