const { NODE_ENV } = process.env
let logger = {
  log: (msg) => console.log(msg),
  error: (msg) = console.error(msg)
}

if (NODE_ENV === 'production' || NODE_ENV === 'test') {
  logger = {
    log: () => {},
    error: () => {}
  }
}

module.exports = logger
