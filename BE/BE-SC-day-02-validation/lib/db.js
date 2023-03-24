import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const {MONGO_URI_LOCAL} = process.env;

const DBconnect = async ()=>{
    try{
       await mongoose.connect(MONGO_URI_LOCAL)
       console.log(`Connected to MongoDB`) 
    }catch(error){
        console.log(error)
    }
}

export default DBconnect