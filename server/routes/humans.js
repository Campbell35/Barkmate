const express = require('express')
const { typeOf } = require('react-chat-engine')
const db = require('../db/humans')

const router = express.Router()

module.exports = router

// A route to direct you to the humnan page after you sign in
// GET /api/v1/human

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

router.get('/chat', async (req, res) => {
  console.log(req.query)
  try {
    if (typeof req.query.query === 'object') {
      const humans = await db.getHumans(req.query.query)
      res.json({ humans })
    } else {
      const humans = await db.getHumans([req.query.query])
      res.json({ humans })
    }
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/pat', async (req, res) => {
  try {
    const pats = await db.getPatsLeft(Number(req.query.query))
    res.json({ pats })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const human = req.body
  const newHuman = {
    ...human,
    pats: 3
  }
  newHuman.auth0_id = req.user.sub
  try {
    const h = await db.addAHuman(newHuman)
    res.json({ human: h })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/pat', async (req, res) => {
  const pats = Number(req.query.pats)
  console.log(req.query)
  const id = Number(req.query.query)
  try {
    const p = await db.updatePat(id, pats)
    res.json({ pet: p })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
