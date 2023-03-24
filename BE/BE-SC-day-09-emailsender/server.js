import express from 'express';
import {config} from 'dotenv';
import logger from 'morgan';
import {sendAnEmail} from './models/Email.js'

config();
// define the port
const port = process.env.PORT || 3000;

// define email transporter
// let transporter = nodemailer.createTransport({
//     // host, aut[username, password], ssl..
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// define the server
const server = express();

// middleware
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));


// routes
// server.post('/send', (req, res)=>{
//     transporter.sendMail({
//         subject: req.body.subject,
//         from: process.env.EMAIL_USER,
//         to: req.body.email,
//         html: req.body.message
//     }, (err, info)=>{
//         if(err){
//             console.log(err)
//             res.json({success: false, error: err})
//         }else{
//             res.json({success: true, info: info})
//         }
//     })
// })

// async/await:
// server.post('/send', async(req, res)=>{
//     try{
//     const info = await transporter.sendMail({
//         subject: req.body.subject,
//         from: process.env.EMAIL_USER,
//         to: req.body.email,
//         html: req.body.message
//     })
//     res.json({success: true, info: info})
// }catch(err){
//     res.json({success: false, error: err})
// }
// })

// server.post('/send', async (req, res) => {
//     // sending message here
//     try{
//         const info = await sendAnEmail(req.body.email, req.body.subject, req.body.message)
//         res.json({success: true, info: info})
//     }catch(err){
//         res.json({success: false, error: err})
//     }
// });

server.post('/send',  (req, res) => {
    // sending message here
    sendAnEmail(req.body.email, req.body.subject, req.body.message).then(info =>{
        res.json({success: true, info: info})
    }).catch(err => {
        res.json({success: false, error: err})
    })
});


// starting the server
server.listen(port, ()=>{
    console.log(`The server is online: \t http://localhost:${port}`)
})