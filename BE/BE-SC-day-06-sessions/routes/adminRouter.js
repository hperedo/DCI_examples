import express from 'express';


const router = express.Router()


router.get('/', (req, res)=>{
    res.send(`<h1>Admin Page</h1>
    <h3>Hello ${req.session.user.name}</h3>
    `)
})


// logout
router.get('/logout', (req, res)=>{
    // kill/destroy session
    req.session.destroy()
    res.json({success: true, message: "You are logged out ):"})
})


export default router;