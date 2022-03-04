const winston = require('winston')

module.exports = (err, req, res, next) => {
    winston.error(err.message, err)
    res.status(500).send({
        status: 500,
        success: false,
        result: 'Internal Server Error.'
    })
}