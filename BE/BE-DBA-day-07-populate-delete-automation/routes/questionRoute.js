import express from "express";

import Question from "../models/Questions.js";
import User from "../models/User.js";
import createError from "http-errors"

const questionRoute = express.Router();

/////////geting or retriveing data
///http://localhost:5000/questions/?author=Sara
///htto://localhost:5000/questions/123

questionRoute.get("/", async (req, res,next) => {


 try {
const q = req.query

  const query =   Question.find(q)
  ////preparation of what we want 
  query.populate('author','username email')
  ///ecexuting the preparation and finding all the questions
  const question =await query.exec()
res.send(question)

 } catch (error) {

  next(createError(500,error.message))
  
 }




});


///////createing  a question 
questionRoute.post("/", async (req, res,next) => {
  try {
const author = await User.findById(req.body.author)


if(!author){

return  next(createError(404,"User not Found!!"))

}


    const newQuestion = new Question(req.body);
    await newQuestion.save();

     author.questions.push(newQuestion)
     await author.save()

    res.status(201).send({ newData: newQuestion });
  } catch (error) {
    next(createError(401,error.message))
  }
});

/////deleting one specific data

questionRoute.delete("/:id", async (req, res,next) => {
  console.log(req.params.id);

  try {
    ///do not forget the underscodre _id
    /// if u use deleteOne without a valid key or empty it will delete the first document in database
    const deletedOne = await Question.deleteOne({ _id: req.params.id });
    if (deletedOne.deletedCount) {
      return res.status(200).send({ message: "one item is delted" });
    }
     
    next({status:404,message:"the question not Found!!"})

  } catch (error) {
    next(createError(500,error.message))
  }
});


/////updating specific data

questionRoute.put("/:id", async (req, res,next) => {
  try {
    let findTheQuestionAndUpdate = await Question.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

if(findTheQuestionAndUpdate){

   return  res.status(200).send({newData:findTheQuestionAndUpdate})

}

next({status:404,message :"the question you ar trying to update does not exist "})


  
  } catch (error) {
   next(createError(500,error.message))
  }
});

// DELETING ALL THE QUESTIONS

questionRoute.delete("/",async(req,res,next)=>{
try {
  const delteMnay = await Question.deleteMany({}) 
res.status(200).send(delteMnay)

} catch (error) {
  next(createError(500,error.message))
}


})


export default questionRoute;
