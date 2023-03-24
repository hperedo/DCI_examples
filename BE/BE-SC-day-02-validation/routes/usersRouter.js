import {Router} from 'express'
import {validateNewUserForm} from '../middleware/validators.js'
import {registerNewUser} from '../controllers/usersController.js'
import {checkAuthorize} from '../middleware/authorize.js'
const router = Router();

// post user/ register a new user
router.post('/', checkAuthorize, validateNewUserForm, registerNewUser);



export default router;