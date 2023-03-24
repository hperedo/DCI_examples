import express from 'express'


export const checkApiKey = (req,res,next)=>{

const apiKey = req.headers['api-key']

console.log( "api key is her ",  apiKey)
if(!apiKey || apiKey!=="FBW-E05"  ){
next("apikey is not provided in the request or not valid")
return
}
next()
}