import { Router } from 'express'
import loginController from '../controller/loginController'

const router = Router()

router.route('/register').post(loginController.register)
router.route('/login').post(loginController.login)
router.route('/logout').get(loginController.logout)


export default router
