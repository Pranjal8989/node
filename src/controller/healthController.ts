import { NextFunction, Request, Response } from 'express'
import quicker from '../util/quicker'
import httpResponse from '../util/httpResponse'
import httpError from '../util/httpError'
import responseMessage from '../constant/responseMessage'
export default {
    health: (req: Request, res: Response, next: NextFunction) => {
        try {
            const healthData = {
                application: quicker.getApplicationHealth(),
                system: quicker.getSystemHealth()
            }
            httpResponse(req, res, 200, responseMessage.SUCCESS, healthData)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    },
}
