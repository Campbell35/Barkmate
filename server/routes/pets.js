const express = require('express')
// TODO: import checkJwt
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
