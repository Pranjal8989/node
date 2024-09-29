import datenvFlow from 'dotenv-flow'

datenvFlow.config()

export default {
    // General
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // session
    SESSION_SECRET :process.env.SESSION_SECRET,


    // DATABASE
    DATABASE_URL: process.env.DATABASE_URL
}
