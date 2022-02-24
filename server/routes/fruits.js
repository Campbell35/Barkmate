const express = require('express')
// TODO: import checkJwt
const db = require('../db/pets')

const router = express.Router()

module.exports = router

// homepage for sign in
// GET /api/v1/home

router.get('/', async (req, res) => {
  try {
    const home = await db.gethome()
    res.json({ home })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// POST /api/v1/signin
router.post('/', async (req, res) => {
  const { pet } = req.body
  const auth0Id = req.user?.sub
  const newpet = {
    added_by_user: auth0Id,
    name: pet.name,
    calories: pet.calories
  }
  try {
    const pets = await db.addpet(newpet)
    res.json({ pets })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// A route to direct you to the pets page after you sign in
// GET /api/v1/pets

router.get('/', async (req, res) => {
  try {
    const pets = await db.getpets()
    res.json({ pets })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// use checkJwt as middleware
// PUT /api/v1/pets
router.put('/', async (req, res) => {
  const { pet } = req.body
  const auth0Id = req.user?.sub
  const petToUpdate = {
    id: pet.id,
    added_by_user: auth0Id,
    name: pet.name,
    calories: pet.calories
  }
  try {
    const pets = await db.updatepet(petToUpdate, auth0Id)
    res.json({ pets })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'Unauthorized: Only the user who added the pet may update it'
      )
    }
    res.status(500).send(err.message)
  }
})

// use checkJwt as middleware
// DELETE /api/v1/pets
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const auth0Id = req.user?.sub
  try {
    const pets = await db.deletepet(id, auth0Id)
    res.json({ pets })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'Unauthorized: Only the user who added the pet may delete it'
      )
    }
    res.status(500).send(err.message)
  }
})
