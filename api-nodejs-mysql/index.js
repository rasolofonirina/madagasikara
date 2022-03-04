require('express-async-errors')
const winston = require('winston')
const express = require('express')
const app = express()

require('./startup/logging')()
require('./startup/routes')(app)
require('./startup/prod')(app)


const port = process.env.PORT || 8800

const server = app.listen(port, () => {
    winston.info(`The API works on port ${port} ...`)
})

module.exports = server