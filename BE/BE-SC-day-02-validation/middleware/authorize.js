import dotenv from 'dotenv'
dotenv.config()
const {apiKey} = process.env 

export const checkAuthorize = (req, res, next)=>{
    // headers keywords ad lowercase
    if(req.headers.apikey === apiKey){
        next()
    }else{
        res.json('NOT Authorized')
    }
}