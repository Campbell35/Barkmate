const express = require('express')
const db = require('../db/likes')

const router = express.Router()

module.exports = router

// A route to direct you to the matches page after you sign in
// GET /api/v1/matches

router.get('/', async (req, res) => {
  try {
    const matches = await db.getCommonLikes()
    res.json({ matches })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
