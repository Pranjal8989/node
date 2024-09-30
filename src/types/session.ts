// sessionConfig.ts
import session from 'express-session'
import config from '../config/config'

declare module 'express-session' {
    interface SessionData {
        user: {
            email: string
            name: string
            role: string
        }
    }
}

export default session({
    secret: config.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 6000000
    }
})
