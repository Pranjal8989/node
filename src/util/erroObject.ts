import { Request } from "express";
import { THttpError } from "../types/types";
import responseMessage from "../costant/responseMessage";
import config from "../config/config";
import { EApplicationEnvironment } from "../costant/application";



export default (err:Error | unknown,req:Request,errorStatusCode:number=500): THttpError =>
    {
    const errorobj : THttpError={
        success:false,
        statusCode:errorStatusCode,
        request:{
            ip : req.ip || null,
            method:req.method,
            url:req.originalUrl
        },
        message:err instanceof Error ? err.message || responseMessage.ERROR: responseMessage.ERROR,
        data :null,
        trace: err instanceof Error ? {error :err.stack} : null
    }
    // log 
console.info('CONTROLLER_RESPONSE',{
    meta:errorobj
})

//productionenv check
if(config.ENV === EApplicationEnvironment.PRODUCTION){
    delete errorobj.request.ip
    delete errorobj.trace
}


return errorobj
}