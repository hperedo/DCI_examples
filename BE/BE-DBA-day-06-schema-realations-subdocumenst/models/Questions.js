import mongoose from 'mongoose'



const required = true
const unique = true
const trim = true



const {Schema,model} = mongoose

const questionSChema = new Schema({

author :{type:Schema.Types.ObjectId ,ref:'user', required},
title : { type :  String  ,trim  ,required ,unique },
content : {type:String , trim},
category : {type : String  , default:"kitty" },
type :{type : String  , required , enum :["internal","external" ]}




})


const Question = model( "question" ,questionSChema  )

export default Question

// enum is a _ very_basic validation
// the trim _very_basic sanitization  or  sanitation