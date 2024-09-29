import { NextFunction, Request, Response } from 'express'
import responseMessage from '../constant/responseMessage'
import httpError from '../util/httpError'

const verifySession = (requiredRole?: string) => {
    return (req: Request, _: Response, next: NextFunction) => {
        if (req.session && req.session.user) {
            if (requiredRole && req.session.user.role !== requiredRole) {
                return httpError(next, responseMessage.ACCESS_DENIED, req, 403);
            }
            return next();
        } else {
            httpError(next, responseMessage.USER_NOT_ATHURIZED, req, 401);
        }
    };
};
export default verifySession