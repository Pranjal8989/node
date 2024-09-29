import { NextFunction, Request, Response } from 'express'
import httpError from '../util/httpError'
import loginModel from '../model/loginModel'
import httpResponse from '../util/httpResponse'
import responseMessage from '../constant/responseMessage'
import userModel from '../model/userModel'
import logger from '../util/logger'

export default {
    register: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = new loginModel(req.body)
            const loginData = new userModel(req.body)
            const { email } = userData
            const userExist = await loginModel.findOne({ email })
            if (userExist) {
                return httpResponse(req, res, 200, responseMessage.USER_EXIST, userExist)
            }
            await loginData.save()
            const user = await userData.save()
            httpResponse(req, res, 200, responseMessage.USER_CREATED, user)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = new loginModel(req.body)
            const { email, password } = userData
            const emailExist = await loginModel.findOne({ email })
            if (!emailExist) {
                return httpResponse(req, res, 200, responseMessage.USER_NOT_FOUND)
            }
            if (!emailExist || password !== emailExist.password) {
                return httpError(next, responseMessage.LOGIN_FAILED, req, 401)
            }

            const userAllData = await userModel.findOne({ email })
            if (req.session) {
                req.session.user = {
                    email: userAllData?.email ?? 'default_email@example.com',
                    name: userAllData?.name ?? 'Default Name',
                    role: emailExist.role as string
                }
            } else {
                logger.info(email)
                return httpError(next, 'Session not initialized', req, 500)
            }

            httpResponse(req, res, 200, responseMessage.LOGIN_SUCCESS, req.session.user)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    },
    logout:  (req: Request, res: Response, next: NextFunction) => {
        try {
            req.session.destroy((err) => {
                if (err) {
                    return httpError(next, err, req, 500)
                }
                res.clearCookie('connect.sid') // Clear the session cookie
                httpResponse(req, res, 200, responseMessage.LOGOUT)
            })
        } catch (err) {
            httpError(next,err,req,500)
        }
    }
}
