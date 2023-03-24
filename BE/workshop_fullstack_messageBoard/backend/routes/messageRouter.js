import express from "express";
import Message from "../models/Message.js";
import createError from "http-errors";
import User from "../models/User.js";
const messageRouter = express.Router();

messageRouter
  .get("/", async (req, res, next) => {
    try {
      const query = Message.find({});
      ///prepare the request
      query.populate("author", "name -_id");
      const allMessages = await query.exec();
      console.log(allMessages);
      res.send(allMessages);
    } catch (error) {
      next(createError(500, error.message));
    }
  })

  .post("/", async (req, res, next) => {
    try {
      ///this userId is added from checkAuth middleware after verifying token
      req.body.author = req.userId;
      const newMessage = await Message.create(req.body);

      const user = await User.findById(req.body.author);
      user.messages.push(newMessage._id);
      await user.save();

      res.status(200).send(newMessage);
    } catch (error) {
      next(createError(400, error.message));
    }
  }).delete('/:id',async(req,res,next)=>{
       

try {
    const delteOneMeesage = await Message.findByIdAndDelete(req.params.id)
  
       
    if(!delteOneMeesage){

      next(createError(400, error.message));
      return
    }


    const author = await User.findById(req.userId)
    author.messages= author.messages.filter(x =>  x.toString() !==req.params.id.toString())
    await author.save()
    console.log(delteOneMeesage);

    res.send({success:true})
} catch (error) {
  next(createError(500, error.message));
}

  })

export default messageRouter;
