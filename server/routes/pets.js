const express = require('express')
const checkJWT = require('../auth0')
const db = require('../db/pets')

const router = express.Router()

module.exports = router

// A route to direct you to the pets page after you sign in
// GET /api/v1/pets

router.get('/', async (req, res) => {
  try {
    const pets = await db.getPets()
    res.json({ pets })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/ownerId', async (req, res) => {
  try {
    const petsByOwner = await db.getPetsByOwner(Number(req.query.query))
    res.json({ petsByOwner })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  const pet = req.body
  try {
    const p = await db.addAPet(pet)
    res.json({ pet: p })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/pat', async (req, res) => {
  const id = Number(req.query.query)
  try {
    const p = await db.addAPat(id)
    res.json({ pet: p })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
