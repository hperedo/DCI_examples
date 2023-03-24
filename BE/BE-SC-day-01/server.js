import express from 'express'
import dotenv from 'dotenv'
import logger from 'morgan'
import {body, validationResult} from 'express-validator'
// import validator from './middleware/validator.js'



dotenv.config()

const port = process.env.PORT || 5000;

const server = express();

// middleware
server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.post('/reg',expressValidatorFunctions
, (req, res)=>{
    // all errors in previous checkers
    let errors = validationResult(req)
    if(errors.isEmpty()){
        res.json({success: true})
    }else{
        res.json(errors)
    }
})

function expressValidatorFunctions(req, res, next){
    return [
       body('username').exists(),
       body('name').exists().withMessage("Please add name").isUppercase().withMessage("Please Uppercase!:"),
       body('password').exists(),
       
    ]
}

// routes
// router for register a new user
// post request
/*
    1- name (min=6)
    2- username (min=5)
    3- password (min=8)
    4- email    (email expression)
*/
// server.post('/reg', validator.checkNameExist, validator.checkNameLength, validator.checkUsername ,(req, res)=>{
//     //register processing
//     console.log(req.body)
    
//         // looks fine ready to store
//     res.json({success: true});

// })




// starting the server
server.listen(port, ()=>console.log(`Ready On \t http://localhost:${port}`))