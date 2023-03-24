import express from 'express';
// import cors from 'cors'
import dotenv from 'dotenv'
// import logger from 'morgan'
// path library, to manage paths
// import path from 'path'

// let the app able to read all constants variables
dotenv.config()

// define the port
const port = process.env.PORT || 5050;

// define the app
const server = express()

// use logger morgan middleware to see what the requests the server is getting 
// server.use(logger('dev'))
// Allow ANY REQUEST FROM ANY WHERE
/**
 * REMOVE BEFORE DEPLOY
 */
// server.use(cors())

// Make public folder available for any browser (GET) method only,
// to put frontend stuff here
server.use(express.static(process.argv[1]+"/public"))

// example: to get themes.css: http://localhost:5001/myPublic/themes/themes.css
// route for /api/users
server.get('/api/users', (req, res)=>{
    res.json([{
        name: "Mostafa",
        lastName: "Othman",
        age: 30
    },
    {
        name: "Jay",
        lastName: "Radan",
        age: 25
    }
])
})
// console.log(process.argv)
// for style file
// server.get('/style.css' , (req, res)=>{
//     // sending style.css
//     // 
//     // res.sendFile('/home/mostafa/Documents/FBW-E05-B/live_coding/BE/BE-server-day-08-deploy/backend/public/style.css')
//     res.sendFile(`${process.argv[1]}/public/style.css`)
// })

// post handler for /api/messages
server.post('/api/messages', (req, res)=>{
    let messages = [{
        id:0,
        title: "Message From Customer A",
        body: "ANY"
    },
    {
        id:1,
        title: "Message From Customer B",
        body: "ANY"
    },{
        id:2,
        title: "Message From Customer C",
        body: "ANY"
    }]
    res.json(messages)
})

// Make response for ANY GET method to index.html (react)
server.get('*', (req, res)=>{
    res.sendFile(`${process.argv[1]}/public/index.html`)
})

// keep app running & listening
server.listen(port, ()=>console.log(`Backend Ready On: \t http://localhost:${port}`))

