// DB_URI: is the constant variable in .env file
import express from 'express'
import dotenv from 'dotenv'
import logger from 'morgan'
import mongoose from 'mongoose'
import userRouter from './routes/userRouter.js'
import {log} from 'console'

// enable reading .env
dotenv.config()

// avoid warning (strictQuery)
mongoose.set('strictQuery', false);
// establish connection to MongoDB_Atlas:
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ro2kvsc.mongodb.net/${process.env.DB_NAME}`).then(()=>{
    log("Connected To MongoDB")
}).catch(error=>{
    log(error)
})

// define the server
const server = express();
// define the port
const port = process.env.PORT || 3000
// middleware
server.use(logger('dev'));
// let server able to parse post (req.body) request
server.use(express.json());
server.use(express.urlencoded({extended: true}))

// settings routes
// any request to users, userRouter will be response
server.use('/users', userRouter)

// start the server & listen
server.listen(port, ()=>log(`Server Ready On \t http://localhost:${port}`))
