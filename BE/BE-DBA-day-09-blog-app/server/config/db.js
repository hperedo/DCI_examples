import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.set("strictQuery", false)

const connectDB = ()=>{
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB")
}).catch(error=>{
    console.log(error)
})
}

export default connectDB;