import { Connection } from 'mongoose'
import { RateLimiterMongo } from 'rate-limiter-flexible'

export let ratelimiterMongo:null | RateLimiterMongo =null

const Point = 10
const duration=60 

export const initRateLimiter = (mongooseconnection: Connection) => {
    ratelimiterMongo = new RateLimiterMongo({
        storeClient: mongooseconnection,
        points: Point,
        duration: duration
    })
}
