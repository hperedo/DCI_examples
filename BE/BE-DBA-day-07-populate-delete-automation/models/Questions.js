import mongoose from "mongoose";
import User from "./User.js";

const required = true;
const unique = true;
const trim = true;

const { Schema, model } = mongoose;

const questionSChema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "user", required },
  title: { type: String, trim, required, unique },
  content: { type: String, trim },
  category: { type: String, default: "kitty" },
  type: { type: String, required, enum: ["internal", "external"] },
});

questionSChema.pre("deleteOne", async function () {
  ////// `this`   referse to the question  we are trying to delete
  ///// `this.getQuery()`  gives us the id of the question we are trying to delete
  console.log(this.getQuery());

  const id = this.getQuery()._id;

  const user = await User.findOne({ questions: id });

  console.log(user);

  user.questions = user.questions.filter((x) => x.toString() !== id.toString());

  await user.save();
});

const Question = model("question", questionSChema);

export default Question;

// enum is a _ very_basic validation
// the trim _very_basic sanitization  or  sanitation
