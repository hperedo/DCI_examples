const express = require('express')
// define router
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Hello World')
})

// const mainHandler = (req, res)=>{
//     res.send("Hello World")
// }



// ONLY in COMMONJS
module.exports = router

// ONLY in ES
// export default router