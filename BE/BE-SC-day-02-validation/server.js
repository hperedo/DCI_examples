import express from 'express'
import usersRouter from './routes/usersRouter.js'
import DBconnect from './lib/db.js'
import dotenv from 'dotenv'
import logger from 'morgan'

dotenv.config()

const port = process.env.PORT || 5000

const server = express();

// connect to database
DBconnect()

// middleware
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));

// to protect ANY REQUEST with authorize:
// server.use(checkAuthorize)

// routes
server.use('/api/users', usersRouter)

// global error handling in express
server.use((err, req, res)=>{
    if(err){
        res.status(422).json(err)
    }
})

// starting server
server.listen(port, ()=>console.log(`Ready on : \t http://localhost:${port}`))