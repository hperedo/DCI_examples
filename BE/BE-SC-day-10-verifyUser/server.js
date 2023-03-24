import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";
import Verification from "./models/Verification.js";
import sendAnEmail from "./models/Email.js";
// call config
config();
//mongodb+srv://FBW05:<password>@cluster0.ro2kvsc.mongodb.net/?retryWrites=true&w=majority
// connect to MongoDB ATLAS
// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`).then(()=>{
//     console.log("Connected To MongoDB")
// }).catch(error=>{
//     console.log(error)
// });

// LOCAL DB
mongoose
  .connect("mongodb://localhost:27017/demo")
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

//  define the port
const port = process.env.PORT || 3000;

// defint the server
const server = express();

// middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// routes
// 1. register router
server.post("/register", async (req, res) => {
  try {
    // 1- store the new user in DB users collections
    const insertedUser = await User.create(req.body);
    // 2- generate a random (Number/String) . store it in DB verifications with inserted userId
    const key = Math.random().toString(20).substring(2, 12);
    // 3- store key & insertedUserId in DB verifications.
    const insertedVerifications = await Verification.create({userId: insertedUser._id, key: key});
    // 4- send an email to that user with the key/link, to verify the email in OUR server-side (DB)
    const info = await sendAnEmail(req.body.email, 'verify Your email', `
    <h1>Verify Your Email</h1>
    <p>
        This email '${req.body.email}', is used to register in our app, <br>
        please visit <a href="http://localhost:5000/verify?userId=${insertedUser._id}&key=${key}">this link</a> To verify your email.
        <br>
        If you not the owner, please ignore the message
        <br>
        Thank You.
    </p>
    `);
    res.json({success: true, info:"register is Done, check your email"})
  } catch (err) {
    console.log(err)
    res.json({success: false, error: err})
  }
});

// router to accept verify 
server.get('/verify', async(req, res)=>{
    const {userId, key} = req.query;
    try{
        const verifyRecord = await Verification.findOne({userId: userId, key: key})
        if(verifyRecord.userId){
            // exist
            // then update users, set verify = true
            const updateResult = await User.findOneAndUpdate({_id: userId}, {
                $set:{
                    verified: true
                }
            });
            console.log(updateResult)
            // delete that record in verifications
            const deleteResult = await Verification.findOneAndDelete({userId: userId})
            // sending the response to user
            res.json({success: true, info: "Your email is verified"})
        }else{
            // not exist
            res.json({success: false, info: "userid or key not valid!"})
        }
    }catch(err){
        res.json({success: false, error: err})
    }
})
// start server
server.listen(port, () => {
  console.log(`Server is running on \t http://localhost:${port}`);
});
