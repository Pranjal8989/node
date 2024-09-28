import { NextFunction, Request, Response } from 'express'
import userModel from '../model/userModel'
import httpResponse from '../util/httpResponse'
import responseMessage from '../constant/responseMessage'
import httpError from '../util/httpError'


export default {
    getAllUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = await userModel.find()
            httpResponse(req, res, 200, responseMessage.USERS_FETCHED, userData)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    },
    getUserByID: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const userData = await userModel.findById({_id:id})
httpResponse(req,res,200,responseMessage.USERS_FETCHED,userData)
        } catch (err) {
            httpError(next,err,req,500)
        }
    },
    createUser:async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const userData = new userModel(req.body)
            const {email} = userData
            const userExist = await userModel.findOne({email})
            if(userExist){
                return httpResponse(req,res,200,responseMessage.USER_EXIST,userExist)
            }
            const user = await userData.save()
            httpResponse(req,res,200,responseMessage.USER_CREATED,user)
        } catch (err) {
            httpError(next,err,req,500)
            
        }

    },
    updateUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const userExist = await userModel.findOne({ _id: id })
            if (!userExist) {
                return httpError(next, responseMessage.NOT_FOUND, req, 404)
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const userData = await userModel.findByIdAndUpdate(id, req.body, { new: true })
            httpResponse(req, res, 200, responseMessage.USER_UPDATED, userData)
        } catch (err) { 
            httpError(next, err, req, 500)
        }
    },
    deleteUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const userExist = await userModel.findOne({ _id: id })
            if (!userExist) {
                return httpError(next, responseMessage.NOT_FOUND, req, 404)
            }
            const userData = await userModel.findByIdAndDelete({_id:id})
            httpResponse(req, res, 200, responseMessage.USER_DELETED, userData)
        } catch (err) { 
            httpError(next, err, req, 500)
        }
    },
}
