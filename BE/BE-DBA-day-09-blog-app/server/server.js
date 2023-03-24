import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import dotenv from 'dotenv'
import postRouter from './routes/postRouter.js'
import commentRouter from './routes/commentRouter.js'
import connectDB from './config/db.js'

// enable .env
dotenv.config();

// connect to MongoDb
connectDB()

// define the port
const port = process.env.PORT || 5000;
// define server
const server = express();

// middleware:
// DELETE BEFORE DEPLOY
server.use(logger('dev'))
server.use(cors())
// enable body request (POST) Object parsing
server.use(express.json())
server.use(express.urlencoded({extended: false}));

// start the routes
// api for post
server.use("/api/posts", postRouter)
// api for comments
server.use('/api/comments', commentRouter)

// starting the server
// change process.stdout.write ==> console.log()
server.listen(port, ()=>console.log(`Ready on \t http:localhost:${port}`))
