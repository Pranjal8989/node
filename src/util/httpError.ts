import { NextFunction, Request } from 'express'
import erroObject from './erroObject'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (nextFunc: NextFunction, _: Error | unknown, req: Request, errorStatusCode: number = 500): void => {
    const errorObj = erroObject(erroObject, req, errorStatusCode)
    return nextFunc(errorObj)
}
