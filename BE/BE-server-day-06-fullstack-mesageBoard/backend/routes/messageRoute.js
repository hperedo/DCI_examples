
import {Router} from "express";
import fs from 'fs'
export  const messageRouter = Router()
// To get __dirname: full path for current file in ES6
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
// This three lines let me able to brows the project directories

console.log(join(__dirname, "../data"))


// let messages =[]// RAM
// To store messages even after restart server:
/**
 * 1- Store the messages in file (HHD)
 */
//// get / => it sends all the messages

messageRouter.get("/",(req,res, next)=>{
fs.readFile(`${join(__dirname, '../data')}/messagesStorage.json`, (error, data)=>{
    if(error){
        next(error)
    }else{
        console.log(data.toString())
        let messages = data.toString();
        res.json(JSON.parse(messages))
    }
})

// res.send(messages)

})   ///// 

//// post  / =>  create or save new message 

messageRouter.post('/',(req,res, next)=>{

const newMessage = req.body  //{id:215498465 name:"mylo" ,message :"i love food"  }
newMessage.id = Date.now();
// Store this new message to the file
// 1-   read the messages
// 2-   convert data in messages to JSON (to push this new message to that data)
// 3-   rewrite the file with the new object again
fs.readFile(`${join(__dirname, '../data')}/messagesStorage.json`, (error, data)=>{
    if(error){
        next(error)
    }else{
        // 1- read & convert to Object is Done
        let allMessages = JSON.parse(data.toString())// [{title: "any"}, {}]
        // 2- push this new message to allMessages
        allMessages.push(newMessage)
        // 3- rewrite allMessages agin to the same file
        fs.writeFile(`${join(__dirname, '../data')}/messagesStorage.json`, JSON.stringify(allMessages), error=>{
            if(error){
                // pass that error to global
                next(error)
            }else{
                res.status(201).send({message :newMessage})
            }
        })
    }
})



//messages.push(newMessage)

// console.log(messages)
// res.status(201).send({message :newMessage})
})



//  /messages/1675330601292
messageRouter.delete('/:id',(req,res)=>{

console.log(req.params)

const filteredMessages = messages.filter(msg => msg.id != req.params.id)

messages = filteredMessages
res.send(messages)

})



 messageRouter.put('/:id',(req,res)=>{

console.log(req.params)
console.log(req.body)

const updateOne = messages.map(msg => msg.id == req.params.id  ? req.body :msg )

messages = updateOne

res.send(messages)

 })