const { BEARER_TOKEN } = process.env


module.exports = (req, res, next) => {
  const { authorization = false } = req.headers
  if (!authorization ||
    !authorization.includes('Bearer') ||
    authorization.split(' ')[1] !== BEARER_TOKEN
  ) {
    return res.status(403).send('bad')
  } else {
    next()
  }
}
