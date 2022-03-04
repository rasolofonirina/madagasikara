const winston = require('winston')
require('express-async-errors')
 
module.exports = () => {
    winston.exceptions.handle(
        new winston.transports.Console({
            colorize: true,
            prettyPrint: true
        }),
        new winston.transports.File({
            filename: 'uncaughtExceptions.log'
        })
    )
    
    process.on('unhandledRejection', (exception) => {
        throw exception
    })
    
    winston.add(new winston.transports.File({ 
        filename: 'prod.log'
    }))
}