const request = require('superagent')
const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')
const userRoutes = require('./routes/users')
// const petsRoutes = require('./routes/pets')
// const humanRoutes = require('./routes/humans')
// const matchesRoutes = require('./routes/matches')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/users', userRoutes)
// server.use('/api/v1/pets', petsRoutes)
// server.use('/api/v1/humans', humanRoutes)
// server.use('/api/v1/matches', matchesRoutes)
server.post('/chat/api', (req, res) => {
  request
    .post('https://api.chatengine.io/users/')
    .set('PRIVATE-KEY', '46d540be-94a3-4271-b500-2894565d5fce')
    .send(req.body)
    .then(() => {
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.error(err.message)
    })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
