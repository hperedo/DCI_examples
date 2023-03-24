export const checkLogin = (req, res, next)=>{
    if(req.session.user){
        next()
    }else{
        res.json({success: false, message: "you are not loggind"})
    }
}


// export const checkApiKey