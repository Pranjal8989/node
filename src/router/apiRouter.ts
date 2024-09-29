import { Router } from 'express'
import apiController from '../controller/apiController'
import verifySession from '../middleware/verifySession'

const router = Router()

router.route('/').get(verifySession('admin'),apiController.getAllUser)
router.route('/:id').get(verifySession('admin'),apiController.getUserByID)
// Route for all user and admin
router.route('/').post(verifySession(),apiController.createUser)
router.route('/:id').put(verifySession(),apiController.updateUser)
router.route('/:id').delete(verifySession(),apiController.deleteUser)


export default router
