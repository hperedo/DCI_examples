import User from '../models/user.js'

export const registerNewUser = async (req, res, next)=>{
    // console.log(req.body)
    // process to store a new user
    try{
       const insertedUser =  await User.create(req.body)
        res.json({success: true, user: insertedUser})
    }catch(err){
        console.log(err)
        res.json({success: false, error: err})
    }
    // res.json({success: true, user: req.body})
}