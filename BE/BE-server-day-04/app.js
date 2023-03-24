const express = require('express');
const mainRouter = require('./routes/mainRouter')
const searchRouter = require('./routes/searchRouter')
const checkNameParam = require('./middleware/checkName')
const {showTime, showURL} = require('./middleware/logInfo')

// ONLY IN Module type
// import express from 'express'

// define the port
const port = 3000

// define app/server
const app = express()

// json parsers
app.use(express.json())
// use body parsers middleware
app.use(express.urlencoded({extended: false}))


// use some middleware in all/any route
app.use(showURL)

// get request, For any request type(post, get, put ...)
app.use('/', showURL, showTime,  mainRouter)

// for search route
app.use('/search', showURL, checkNameParam ,searchRouter)

app.get("/home", (req, res)=>{
    res.send("Home Page")
})

// for /api post
app.post("/api", (req, res)=>{
    console.log(req.body)
    res.json(req.body)
})

// listen to some port
app.listen(port, ()=>console.log(`Server is Running listening on port ${port}\nReady on: http://localhost:${port}`))