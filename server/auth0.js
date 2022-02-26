require('dotenv').config()
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const domain = process.env.AUTH0_DOMAIN
const audience = `https://${domain}/api/v2/`

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }),
  audience: audience,
  algorithms: ['RS256']
})

module.exports = checkJwt
