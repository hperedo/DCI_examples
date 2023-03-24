import express from 'express'
import * as userController from '../controllers/userController.js'
// define router
const router = express.Router()

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

// consider anything comes after /users/ANY as userName
// req.params.userName || req.params["userName"]
router.get('/:userName', userController.findUserByName)

export default router