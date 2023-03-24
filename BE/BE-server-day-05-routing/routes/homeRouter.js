import express from 'express'
import {Router} from 'express'
import {log} from 'console'

// define router
// const homeRouter = express.Router()
const homeRouter = Router()
// already /home
homeRouter.get("/", (req, res)=>{
    res.send("Home Page")
})


// already /home  /home/bla
// router.route("ROUTE_NAME").<METHOD_1>(HANDLER).<METHOD_2>(handler)....so on
homeRouter.route("/bla").get((req, res)=>{
    res.send("Bla Page GET")
}).post((req, res)=>{
    res.send("Bla Page POST")
}).put((req, res)=>{
    res.send("Bla Page PUT")
})

homeRouter.get("/books/:bookId", (req, res)=>{
    // :bookId is Parameter
    log(req.params.bookId)
    res.send("Book With Id: "+ req.params.bookId)
})
// already /home
homeRouter.post('/', (req, res)=>{
    res.send("Post Request")
})
// already /home
homeRouter.put('/', (req, res)=>{
    res.send("PUT Request")
})

// /home/username/lastname/email
homeRouter.get('/:username/:lastname/:email', (req, res)=>{
    log(req.params)
    res.send(req.params)
        // Example:
    // URL: http://localhost:5000/home/Mostafa/Othman/aaa@aaa.aaa
    // req.params:
    /* {
        username: 'Mostafa',
        lastname: 'Othman',
        email: 'aaa@aaa.aaa'
    }*/
})


// Search route
homeRouter.get('/search', (req, res)=>{
    log(req.query)
    res.send(req.query)
    /**
     * URL:
     * http://localhost:5000/home/search?bookId=10&author=Mostafa
     * OUT:
     * { bookId: '10', author: 'Mostafa' }
     */
})

// get (ALL CASES "GET") /home/ANY/THING
homeRouter.get('*', (req, res)=>{
    res.send("GENERAL MESSAGE TO ALL CASES")
})

export default homeRouter;