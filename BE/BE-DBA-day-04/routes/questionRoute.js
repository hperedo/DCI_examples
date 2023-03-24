import express from "express";
import Question from "../models/Questions.js";
const questionRoute = express.Router();

questionRoute.get("/", async (req, res) => {
  const allQuestions = await Question.find({});
  res.send(allQuestions);
});

questionRoute.post("/", async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();

    res.status(201).send({ newData: newQuestion });
  } catch (error) {
    res.send(error.message);
  }
});

questionRoute.delete("/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    ///do not forget the underscodre _id
    /// if u use deleteOne without a valid key or empty it will delete the first document in database
    const deletedOne = await Question.deleteOne({ _id: req.params.id });
    if (deletedOne.deletedCount) {
      return res.status(200).send({ message: "one item is delted" });
    }

    res
      .status(418)
      .send({ message: "nothing was deleted. the Item does not exist !!  " });
  } catch (error) {
    res.send({ message: error.message });
  }
});

questionRoute.put("/:id", async (req, res) => {
  try {
    let findTheQuestionAndUpdate = await Question.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    console.log(findTheQuestionAndUpdate);
    res.send({ newData: findTheQuestionAndUpdate });
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default questionRoute;
