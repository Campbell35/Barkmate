const path = require('path')
const express = require('express')

const userRoutes = require('./routes/users')
const petsRoutes = require('./routes/pets')
const humanRoutes = require('./routes/human')
const matchesRoutes = require('./routes/matches')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/pets', petsRoutes)
server.use('/api/v1/pets', humanRoutes)
server.use('/api/v1/pets', matchesRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
