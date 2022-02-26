const express = require('express')
const db = require('../db/likes')

const router = express.Router()

module.exports = router

// A route to direct you to the humnan page after you sign in
// GET /api/v1/likes

// router.get('/', async (req, res) => {
//   try {
//     const humans = await db.getHumans()
//     res.json({ humans })
//   } catch (err) {
//     console.error(err)
//     res.status(500).send(err.message)
//   }
// })

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const likes = await db.addALike(req.body)
    res.json({ likes })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
