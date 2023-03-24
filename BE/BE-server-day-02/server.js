
import express from 'express'

import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
const users =[]

app.get("/",(req,res)=>{

/// do stuff
console.log("get request with curl to the Root /")

res.send("whoooooooo that Get to the ROOT  /")
    
})



app.get('/user',(req,res)=>{

///do stuff

const user = {name:"mylo" ,age:"?????"}

res.send(user)

})

app.post('/user',(req,res)=>{

console.log(req.body)
users.push(req.body)

res.send(users)
})



app.get('/todo',(req,res)=>{


//do sutfff
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(respones => respones.json())
.then(result =>res.send(result))
.catch(err => err.message)

})




app.listen(8000,()=>{


    console.log("Server is running on  : http://localhost:8000")
})
