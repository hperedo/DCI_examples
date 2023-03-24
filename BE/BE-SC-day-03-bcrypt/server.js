import express from "express"
import dotenv from 'dotenv'
import connect from './lib/database.js'
import User from "./models/User.js"

const server = express()

dotenv.config()

connect()

server.use(express.json())


server.post('/api/register',async(req,res)=>{

try {
    
    
const user = await User.register(req.body)


res.send(user)

} catch (err) {
    res.send(err.message)
}


})


//  login################

server.post("/api/login" ,async(req,res)=>{



    
const user = await User.login(req.body)

if(!user){

return res.status(401).send({err:"credential Invalid"})


}


res.send(user)


})



// ##########  get all the users 

server.get("/api/users",async(req,res)=>{


const users = await User.find({})

res.status(200).send(users)

})




// ##########  DELETE all the users 

server.delete("/api/users",async(req,res)=>{


    const users = await User.deleteMany({})
    
    res.status(200).send(users)
    
    })
    
    
    


const PORT =process.env.PORT|| 2999


server.listen(PORT,()=>{

console.log(`server is runnig on http://localhost:${PORT}`)

})