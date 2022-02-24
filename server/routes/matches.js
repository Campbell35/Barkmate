const express = require('express')
const db = require('../db/matches')

const router = express.Router()

module.exports = router

// A route to direct you to the matches page after you sign in
// GET /api/v1/matches
router.get('/', (req, res) => {
  db.getMatches()
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
