import { NextFunction, Request, Response } from "express";
import httpResponse from "../util/httpResponse";
import responseMessage from "../costant/responseMessage";
import httpError from "../util/httpError";

export default{
    self : (req:Request,res:Response,next:NextFunction)=>{
        try{
            throw new Error("This is error")
            httpResponse(req,res,200,responseMessage.SUCCESS)
        }catch(err){
          httpError(next,err,req,500)
        }

    }
}