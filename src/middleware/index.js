const morgan = require('morgan')
const bearer = require('./bearer')
const BodyParser = require("body-parser")

module.exports = (app) => {
  app.use(bearer)
  app.use(morgan('tiny'))
  app.use(BodyParser.json())
  app.use(BodyParser.urlencoded({ extended: true }))
}
