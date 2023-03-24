import express from 'express';
import {config} from 'dotenv';
import {Server} from 'socket.io';

config();

// define the port
const port = process.env.PORT || 3000;

// define the server
const server = express();

// set environments
// set the port, (NOT NECESSARY)
server.set('port', port);
// tell express that we will use 'ejs' as a view engine, (WE WILL USE HTML STATIC)
server.set('view engine', 'ejs');
// tell express, where is the views fils
server.set('views', 'views')

// middleware
server.use(express.json());
server.use(express.urlencoded({extended: false}));

// routes
server.get('/', (req, res) =>{
    // res.send("hello world")
    res.render('index', {title: "Express App", theme: "dark"})
})

// starting server
const expressApp = server.listen(server.get('port'), () => {
    console.log(`server is on: \t http://localhost:${port}`);
});

// define the socket server
const io = new Server(expressApp)

io.on('connection', socket =>{
    console.log('Someone is connected to socket server')
    // send a message to that new connected user
    // socket.emit('MESSAGE_TITLE', "MESSAGE")
    socket.emit("welcome", "welcome to ws server.")
    // delay
    setTimeout(()=>{
        socket.emit("hello", "hello from ws server.")
    },3000)
    
    // listener for 'jay' message
    socket.on('jay', msg =>{
        console.log(msg)// in terminal
    })

    socket.emit('obj', {
        name: "Mostafa",
        age: 30
    })

    // let i = 0
    // const interval = setInterval(()=>{
    //     i ++
    //     // socket.emit('counter', i)// send to current connected user
    //     socket.broadcast.emit('counter', i)// send to all connected users EXEPT the current user
    //     // io.emit('counter', i)// all connected users
    //     // stop interval after i = 10, or after 10 sec, or after any other event
    //     if(i > 10){
    //         clearInterval(interval)// kill this interval
    //     }
    // }, 1000);

    socket.on("message", message=>{
        console.log(message)
        // broadcast this message to all 
        io.emit("incomming", message)
    })


})