import app from './app'
import config from './config/config'

const server = app.listen(config.PORT)
// invoke function 
;(() =>{
    try {
        console.info(`APPLICATION_STARTED`,{
            meta: {
                PORT : config.PORT,
                SERVER_URL:config.SERVER_URL
            }
        })
    } catch (error) {
        console.error(`APPLICATION_ERROR`,{
            meta:error
        })
        server.close((error)=>{
            if(error){
                console.error( `APPLICATION_ERROR`,{
                    meta:error
                })
            }
            process.exit(1)
        })       
    }
})()