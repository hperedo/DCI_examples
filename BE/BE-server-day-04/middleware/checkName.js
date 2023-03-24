// create a middleware, if the request dosent contains "name" param: the server will send "please provide a name"
// else: proceed to searchRouter normally
const checkNameParam = (req, res, next)=>{
    // check if "name param" exist
    // console.log(req.query)
    if(req.query["name"]){
        next()
    }else{
        // kind of error
        // res.send("please provide a name")
        // if next as an argument, it will NOT PROCEED TO NEXT HANDLER, it will throw it t express error handler
        next("ERROR: please provide a name")
    }
}

module.exports = checkNameParam