const express = require('express')
const db = require('../db/humans')


const router = express.Router()

module.exports = router

// A route to direct you to the humnan page after you sign in
// GET /api/v1/humans

router.get('/', async (req, res) => {
  try {
    const humans = await db.getHumans()
    res.json({ humans })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const humans = await db.addAHuman(req.body)
    res.json({ humans })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
