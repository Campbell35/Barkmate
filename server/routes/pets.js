const express = require('express')
const db = require('../db/pets')

const router = express.Router()

module.exports = router

// A route to direct you to the pets page after you sign in
// GET /api/v1/pets
router.get('/', (req, res) => {
  db.getPet()
    .then(result => {
      console.log(result)
      res.json(result)
      return null
    })
    .catch(error => {
      res.status(500).json('insert operation has failed')
      console.error(error)
    })
})
