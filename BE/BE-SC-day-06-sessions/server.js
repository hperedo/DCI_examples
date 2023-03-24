import express from 'express';
import {config} from 'dotenv';
import session from 'express-session';
import logger from 'morgan';
import userRouter from './routes/userRouter.js'
import adminRouter from './routes/adminRouter.js'
import {checkLogin} from './middleware/checkAuthrize.js'
config();

// define the port 
const port = process.env.PORT || 3000;

// define the server
const server = express();

// Middleware
server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
//                  ms      minute   hours  and so on... 
    cookie: {maxAge: 1000 * 60 *60 * 24 * 1 }
}))


// Routes
server.use('/admin',  checkLogin,adminRouter);
server.use('/user', userRouter);

// Start the server
server.listen(port, ()=>{
    console.log(`Server Ready On :\t http://localhost:${port}`);
})