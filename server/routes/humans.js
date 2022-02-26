const express = require('express')
const db = require('../db/humans')


const router = express.Router()

module.exports = router

// A route to direct you to the humnan page after you sign in
// GET /api/v1/humans

router.get('/', async (req, res) => {
  const id = req.user.sub
  try {
    const human = await db.getHuman(id)
    res.json({ human })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const human = req.body

  human.auth0_id = req.user.sub
  try {
    const h = await db.addAHuman(human)
    res.json({ human: h })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
