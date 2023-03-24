import Comment from '../models/commentModel.js'
import Post from '../models/postModel.js'

export const createNewComment = async(req, res)=>{
    const {name, postId, comment} = req.body
    try{
       const insertedComment = await Comment.create({
            name: name,
            post_id: postId,
            comment: comment
        })
        // push the new comment_id to post-comments
        await Post.findOneAndUpdate({_id: postId}, {
            $push:{
                comments: insertedComment._id
            }
        })
        res.status(200).json({success: true})
    }catch(error){
        console.log(error)
        res.status(404).json(error)
    }
}