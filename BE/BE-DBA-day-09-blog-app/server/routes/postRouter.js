import express from "express"
import { getAllPosts, getPostById, createNewPost, updatePost, deletePost } from "../controllers/postController.js";
const router = express.Router();

// get method to get all posts
router.get('/', getAllPosts)

// get post by id
router.get('/:postId', getPostById)

router.post('/', createNewPost)

// update REquest
router.put('/', updatePost)

// Delete Post
router.delete("/delete", deletePost)


export default router