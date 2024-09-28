import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import router from './router/index'
import globalHandlerError from './middleware/globalHandlerError'
import responseMessage from './constant/responseMessage'
import httpError from './util/httpError'
import helmet from 'helmet'
import cors from 'cors'

const app: Application = express()

//Middleware
app.use(helmet())
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
        origin:['https://client.com'],
        credentials:true
    })
)
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

//Routes
app.use('/api', router)

// 404 handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (err) {
        httpError(next, err, req, 404)
    }
})

//Global error handler
app.use(globalHandlerError)

export default app
