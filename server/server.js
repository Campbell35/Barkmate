const request = require('superagent')
const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')
const userRoutes = require('./routes/users')
const petsRoutes = require('./routes/pets')
const humanRoutes = require('./routes/humans')
const matchesRoutes = require('./routes/matches')
const likesRoutes = require('./routes/likes')
const checkJwt = require('./auth0')
const ensureUser = require('./middleware.js')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// anything below here requires auth
server.use('/api', ensureUser)
// server.use('/api', checkJwt)

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/pets', petsRoutes)
server.use('/api/v1/human', humanRoutes)
server.use('/api/v1/matches', matchesRoutes)
server.use('/api/v1/likes', likesRoutes)
server.post('/chatapi', (req, res) => {
  request
    .post('https://api.chatengine.io/users/')
    .set('PRIVATE-KEY', '46d540be-94a3-4271-b500-2894565d5fce')
    .send(req.body)
    .then(() => {
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.json(err.message)
    })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
