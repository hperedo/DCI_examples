import mongoose from 'mongoose'

// define the schema
const commentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
},{collection: "comments"});

// define Comments model
const Comments = mongoose.model("Comments", commentsSchema)
// model name use to make ref/relations in Post model
export default Comments