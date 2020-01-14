const express = require('express')
const { mongo } = require('./utils')
const routes = require('./routes')
const middleware = require('./middleware')

const { PORT } = process.env

const app = express()

middleware(app)
routes(app)

async function start() {
  try {
    await mongo.init()
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`)
    })
  } catch (e) {
    throw new Error(e)
  }
}

start()
