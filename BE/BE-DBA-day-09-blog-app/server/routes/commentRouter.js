import {Router} from 'express'
import {createNewComment} from '../controllers/commentsController.js'
const router = Router();

// to create a new comment "POST"
router.post('/', createNewComment)




export default router