function showURL(req, res, next){
    // show the url in terminal
    console.log(`URL: ${req.url}`)
    // proceed to next handler
    next()
}


// define  a middleware to to log the time for each request
function showTime(req, res, next){
    console.log(new Date().toISOString().substring(11, 22))
    // proceed to next handler
    next()
}

module.exports = {showURL, showTime}