import Post from '../models/postModel.js'
import Comments from '../models/commentModel.js'
export const getAllPosts = async (req, res)=>{
    try{
        const allPosts = await Post.find().populate("comments")
        res.json(allPosts)
    }catch(error){
        console.log(error)
        res.json(error)
    }
}

export const getPostById = async (req, res)=>{
    try{
        let postId = req.params.postId
        // ask MongoDb about the post which has id: postId
        let post = await Post.findById(postId)
        res.status(200).json(post)
    }catch(error){
        console.log(error)
        res.status(404).json(error)
    }
}

export const createNewPost = async (req, res)=>{
    console.log(req.body)
    try{
        const {title, author, category, content } = req.body
        // insert to MongoDb
        await Post.create({title, author,category, content })
        res.status(200).json({success: true})
    }catch(error){
        console.log(error)
        res.status(404).json(error)
    }
}

export const updatePost = async (req, res)=>{

    const {postId, title, author, content,category} = req.body 
    // console.log(req.body.post.title)
    // const post = JSON.parse(req.body.post)
    try{
        let updatedPost = await Post.findOneAndUpdate({_id: postId}, {
            $set:{
                title: title,
                author: author,
                content: content,
                category: category
            }
        }, {new: true})
        res.status(200).json({success: true,updatedPost})
    }catch(error){
        console.log(error)
        res.status(404).json(error)
    }
}

export const deletePost = async (req, res)=>{
    // DONT FORGET TO DELETE ALL COMMENTS BELONG TO THIS POST
    const postId = req.body.postId
    try{
        // DEleting the post
        await Post.findOneAndDelete({_id: postId})
        // delete all comments belong to this post
        await Comments.deleteMany({post_id: postId})
        res.status(200).json({success: true})
    }catch(error){
        console.log(error)
        res.status(404).json(error)
    }
}