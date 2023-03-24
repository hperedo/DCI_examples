import {log} from 'console'
import express from 'express';
// importing dotenv to read the .env file variables
// ONLY ONE TIME IN ENTRY FILE
import * as dotenv from 'dotenv'
// call config for dotenv
dotenv.config()
// import morgan
import logger from 'morgan'
// import routes
import homeRouter from './routes/homeRouter.js'

// define the port
const port = process.env.PORT || 3000
// define app/server
const app = express()

// use logger middleware in all/any route
app.use(logger('dev'))

app.get('/', (req, res)=>{
    log("Query For Main Route",req.query)
    res.send("Main URL")
})

// app.all all could be: "get, post, put, delete, ....."
// app.all('/home', homeRouter)

app.use('/home', homeRouter)


// app.all("/home/bla/street", homeRouter)
// app.all('/home/bla', homeRouter)
// app.<METHOD>("/path_OR_URL", handler)
// app.get('/home', (req, res)=>{
//     res.send("Home Page GET Request")
// })

// app.post('/home', (req, res)=>{
//     res.send("Home Page POST Request")
// })
// Will not be executed, already setted
// app.post('/home', (req, res)=>{
//     res.send("Home Page POST Request Again")
// })




// keep server running and listening
app.listen(port, ()=>{
    console.log(`Ready on:\t http://localhost:${port}`)
})