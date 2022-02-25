const express = require('express')
const db = require('../db/humans')

const router = express.Router()

module.exports = router

// A route to direct you to the humnan page after you sign in
// GET /api/v1/human

router.get('/', async (req, res) => {
  try {
    const humans = await db.getHumans()
    res.json({ humans })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
