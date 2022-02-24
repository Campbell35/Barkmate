const express = require('express')
const db = require('../db/pets')

const router = express.Router()

module.exports = router

// homepage for sign in
// GET /api/v1/home

router.get('/', (req, res) => {
  db.getHome()
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

// POST /api/v1/signin
router.post('/', async (req, res) => {
  const { users } = req.body
  const auth0Id = req.user?.sub
  const newUser = {
    added_by_user: auth0Id,
    name: users.name,
    email: users.email
  }
  try {
    const users = await db.addpet(newUser)
    res.json({ users })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

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

// A route to direct you to the humnan page after you sign in
// GET /api/v1/human
router.get('/', (req, res) => {
  db.getHuman()
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

// // PUT /api/v1/pets
// router.put('/', async (req, res) => {
//   const { pet } = req.body
//   const auth0Id = req.user?.sub
//   const petToUpdate = {
//     id: pet.id,
//     added_by_user: auth0Id,
//     name: pet.name,
//     breed: pet.breed
//   }
//   try {
//     const pets = await db.updatepet(petToUpdate, auth0Id)
//     res.json({ pets })
//   } catch (err) {
//     console.error(err)
//     if (err.message === 'Unauthorized') {
//       return res.status(403).send(
//         'Unauthorized: Only the user who added the pet may update it'
//       )
//     }
//     res.status(500).send(err.message)
//   }
// })

// // DELETE /api/v1/pets
// router.delete('/:id', async (req, res) => {
//   const id = Number(req.params.id)
//   const auth0Id = req.user?.sub
//   try {
//     const pets = await db.deletepet(id, auth0Id)
//     res.json({ pets })
//   } catch (err) {
//     console.error(err)
//     if (err.message === 'Unauthorized') {
//       return res.status(403).send(
//         'Unauthorized: Only the user who added the pet may delete it'
//       )
//     }
//     res.status(500).send(err.message)
//   }
// })
