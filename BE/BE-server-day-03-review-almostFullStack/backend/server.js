import express from 'express'

import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())



app.post('/weather',(req,res)=>{


console.log('post request to /weather comming here!!!');

console.log(req.body)


    
res.send({city:req.body.city ,temprature: Math.floor(Math.random() * 20)  })

})




app.listen(8000,()=>{


console.log('Server is running  on : http://localhost:8000');

})