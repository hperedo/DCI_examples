

import express from 'express'

const logger = (req,res,next)=>{


console.log(`REQ  ${req.method} ${req.url}  `);
if(req.body){

console.log(req.body)

}
next()
}


export default logger