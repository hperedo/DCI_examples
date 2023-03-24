import express from 'express';


export const router = express.Router()

router.get('/login', (req, res)=>{
    // req ex: http://localhost:5000/user/login/?username=mostafa&password=12345678
    const {username, password} = req.query
    // asking database
    if(username === "mostafa" && password === "12345678"){
        // assign a session for this user
        // let obj ={

        // }
        // obj.jay = "mostafa"
        // res.session.WHATEVER = WHATEVER
        req.session.user = {name: "mostafa"}
        res.json({success: true})
    }else{
        res.json({success: false})
    }
})

router.post('/login', (req, res)=>{
    // req ex: http://localhost:5000/user/login/?username=mostafa&password=12345678
    const {username, password} = req.body
    // asking database
    if(username === "mostafa" && password === "12345678"){
        // assign a session for this user
        // let obj ={

        // }
        // obj.jay = "mostafa"
        // res.session.WHATEVER = WHATEVER
        req.session.user = {name: "mostafa"}
        res.json({success: true})
    }else{
        res.json({success: false})
    }
})



export default router;