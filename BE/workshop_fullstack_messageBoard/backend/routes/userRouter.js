import express from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import multer from 'multer'
import path from 'path'
const userRouter = express.Router();

const upload = multer({dest:'uploads/'})


const uploadMiddleWare = upload.fields([{name:'selectedFile',maxCount:1}])
////POST /register endpoint
userRouter
  .post("/register", uploadMiddleWare  ,async (req, res, next) => {
    try {
     
    //  console.log(req.files['selectedFile'][0]);
    //
      req.body.avatar = req.files['selectedFile'][0]
       console.log(req.body);
      ///heshing password before saving in database
      const hashed = await hash(req.body.password, 10);
      //replaceing the raw password with hashed
      req.body.password = hashed;
      //saving new user
      const newUser = await User.create(req.body);
      res.send(newUser);
    } catch (error) {
      next(createError(401, error.message));
    }
  })

  .post("/login", async (req, res, next) => {
    ///// checking if email exist
    ///// comparing the hashed pasword
    /////  creating a TOKEN
    /////sending the user and the token

    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        next(createError(401, "Credential Failed"));
        return;
      }

      const successLogin = await compare(req.body.password, user.password);
      if (!successLogin) {
        next(createError(401, "Credential Failed"));
        return;
      }
      /////aaaaaa.bbbbbbb.ccccccc
      const option = { expiresIn: "10m" };
      const token = jwt.sign({ id: user._id }, process.env.SECRET, option);
  
      res.send({ user, token });
    } catch (error) {

       next(createError(500,error.message))

    }
  }).get('/avatar/:filename',async(req,res,next)=>{

try {
const user = await User.findOne({"avatar.filename":req.params.filename})
const absoluteAvatarPath = path.resolve('./',user.avatar.path)
res.sendFile(absoluteAvatarPath)
  
} catch (error) {
  next(createError(400,error.message))
}


  })

export default userRouter;
