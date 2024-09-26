import { NextFunction ,Request} from "express";
import erroObject from "./erroObject";

export default(nextFunc:NextFunction,_:Error | unknown ,req:Request,errorStatusCode : number =500):void=>{
    const errorObj = erroObject(erroObject,req,errorStatusCode) 
    return nextFunc(errorObj) 
}