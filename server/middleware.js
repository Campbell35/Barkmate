function ensureUser (req, res, next) {
  // set headers to `req.headers` as that is where checkJwt() expects them
  req.headers.Authorization = req.header('Authorization')
  if (!req.header('Authorization')) {
    return res.sendStatus(401)
  }
  next()
}

module.exports = ensureUser
