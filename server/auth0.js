require('dotenv').config()
const jwt = require('express-jwt')
// const { auth } = require('express-oauth2-jwt-bearer');

const jwks = require('jwks-rsa')

// TODO: set the domain and audience (API Identifier)
const domain = process.env.AUTH0_DOMAIN
const audience = `https://${domain}/api/v2/`

// const checkJwt = auth({
//   audience,
//   issuerBaseURL: `https://${domain}/`,
//   secret: process.env.AUTH0_SECRET,
//   tokenSigningAlg: 'RS256'
// })

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }),
  audience: audience,
  // issuer: `https://${domain}/`,
  algorithms: ['RS256']
})

module.exports = checkJwt
