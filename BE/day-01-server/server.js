

import express from 'express'

const app =express()
const luckyNumber = Math.round(Math.random() * 20)

//oredr of endpoints matters!!!!
///endpoints  for root /
app.get('/',(req,res)=>{


res.send('hello world')

})




//endpoint for /blah
app.get('/blah',(req,res)=>{


res.send('blah found here  ' + luckyNumber)

})


app.get('/pet',(req,res)=>{

const pet  = {

    name:"mylo",
    age:'??????'
}


res.send(`<h1>${JSON.stringify(pet) } </h1>`  )
})

// * ==> star , asteristic , wildcard
//endpoint for the routes or paths that they dont exist 
app.get('*',(req,res)=>{

  res.send("404 : the page is not found")
})

app.listen(8080,()=>{

console.log('the Server is runnig on : http://localhost:8080');

})
