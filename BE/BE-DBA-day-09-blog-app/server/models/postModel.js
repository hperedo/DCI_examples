import mongoose from "mongoose";

// define the schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required PLEASE"]
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    }],
    date: {
        type: Date,
        default:  Date.now()
    }

},{collection: "posts"})

// make two fields unique
// example: same author with same title is wrong
postSchema.index({title: 1, author: 1}, {unique: true})
// mostafa & ja are authors
// mostafa can create anew post with title nodejs
// mostafa cannot create the same title again
// but jay can create title nodejs

// define the post model
const Post = mongoose.model("Post", postSchema)

export default Post