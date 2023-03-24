import express from 'express';
import {config} from 'dotenv';
import cookiesParser from 'cookie-parser'
import logger from 'morgan';
import {log} from 'console'

config();

const port = process.env.PORT || 3000;

const server = express();

// middleware
server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))
// use cookieParser to read cookies
server.use(cookiesParser())
// routes

server.get('/login', (req, res)=>{
    // read cookies from browser
    console.log(req.cookies)
    // store some cookies in browser
    res.cookie("user", {name: "Mostafa"}, {
        expires: new Date(Date.now() + 100000 ),
        path: "/dashboard"// can only read in /dashboard
    })
    res.send("Hello World")
})

server.get('/dashboard', (req, res)=>{
    console.log(req.cookies)
    if(req.cookies.user){
        res.send(`Hello ${req.cookies.user.name}`)
    }else{
        res.send('Please Login in')
    }
})

server.get('/change', (req, res)=>{
    res.cookie("user", {name: "Jay"}).send("cookie was changed")
})

server.post('/dashboard', (req, res)=>{
    log(req.cookies)
    res.json(req.cookies)
})

server.get('/logout', (req, res)=>{
    // destroy the `user` cookie
    res.clearCookie("user").send("You are logged out")
})

server.listen(port, ()=>{
    log(`Server is online on: http://localhost:${port}`)
})