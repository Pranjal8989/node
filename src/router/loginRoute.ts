import { Router } from 'express'
import apiController from '../controller/apiController'

const router = Router()

router.route('/').get(apiController.getAllUser)
router.route('/:id').get(apiController.getUserByID)
router.route('/').post(apiController.createUser)
router.route('/:id').put(apiController.updateUser)
router.route('/:id').delete(apiController.deleteUser)


export default router
