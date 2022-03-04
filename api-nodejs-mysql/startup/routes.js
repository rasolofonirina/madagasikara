const helmet = require('helmet')
const noCache = require('nocache')
const cors = require('cors')
const bodyParser = require('body-parser')
const error = require('../middlewares/error')

const home = require('../routes/home')
const fokontany = require('../routes/fokontany')
const kaomina = require('../routes/kaomina')
const distrika = require('../routes/distrika')
const faritra = require('../routes/faritra')
const faritany = require('../routes/faritany')

module.exports = (app) => {
    app.use(helmet())
    app.use(noCache())
    app.use(cors())
    app.use(bodyParser.urlencoded({ 
        extended: false 
    }))
    app.use(bodyParser.json())
    app.use('/', home)
    app.use('/v1/fokontany', fokontany)
    app.use('/v1/kaomina', kaomina)
    app.use('/v1/distrika', distrika)
    app.use('/v1/faritra', faritra)
    app.use('/v1/faritany', faritany)
    app.use(error)
}