const compression = require('compression')

module.exports = (app) => {
    app.use(compression())
}