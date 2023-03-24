import express from "express";
import User from "../models/User.js";
import createError from "http-errors"
const userRoutes = express.Router();

// get all users ##################

userRoutes.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).send(users);
  } catch (error) {
    next(createError(500, error.message));
  }
});


// get a Specific  user ##################

userRoutes.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

if(!user){
  return next(createError(404,"user not found"))
}

    res.status(200).send(user);
  } catch (error) {
    next(createError(500, error.message));
  }
});


// create new user################################

userRoutes.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    next(createError(500, error.message));
  }
});

//  deklrte specific usre ###################

userRoutes.delete("/:id", async (req, res, next) => {
  try {
    const deleteOne = await User.deleteOne({ _id: req.params.id });
    if (deleteOne.deletedCount) {
      return res.status(200).send({ message: "one item is delted" });
    }

    next({ status: 404, message: "the user not Found!!" });
  } catch (error) {
    next(createError(500, error.message));
  }
});



// DELETING aall the Users 

userRoutes.delete("/",async(req,res,next)=>{
  try {
    const delteMnay = await User.deleteMany({}) 
  res.status(200).send(delteMnay)
  
  } catch (error) {
    next(createError(500,error.message))
  }
  
  
  })

export default userRoutes
