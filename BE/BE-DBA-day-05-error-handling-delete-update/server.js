import connect from "./lib/db.js";
import dotenv from 'dotenv'
import express from 'express'
import questionRoute from "./routes/questionRoute.js";
import logger  from 'morgan'
const server = express()

dotenv.config()
connect()

server.use(logger('dev'))
server.use(express.json())
server.use("/questions",questionRoute)



server.use("*",(req,res,next)=>{

next({status:404,message:"Resources Not Found!"})


})




///global error handler
server.use((err, req,res,next)=>{
console.log(err)
res.status(err.status|| 400).send({message:err.message || 'unkonwm Error'})


})


server.listen(5000,()=>{

console.log('Server is runnig on http://localhost:5000')

})