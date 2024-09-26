import express,{Application} from 'express'
import path from 'path'
import router from './router/apiRouter'
import globalHandlerError from './middleware/globalHandlerError'

const app:Application = express()

//Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname,'../','public')))

//Routes
app.use("/api/v1/",router)

//Global error handler
app.use(globalHandlerError)

export default app