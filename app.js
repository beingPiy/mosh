const Logger = require('./logger') ;

const logger = new Logger() ;

logger.on("message logged" , (arg) => {
    console.log("Listener Called" , arg) ;
})

logger.log('message') ;