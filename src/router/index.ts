import express from 'express'
import health from './health'
import userRoute from './apiRouter'
const router = express.Router()
const defaultRoutes = [
    {
        path: '/health',
        route: health
    },
    {
        path:'/user',
        route:userRoute
    }

]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})
export default router
