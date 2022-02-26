const e = require('express')
const connection = require('./connection')
const matchFunc = require('../db/matches')

function getLikes (db = connection) {
  return db('likes').select()
}

function addALike (like, db = connection) {
  return db('likes')
    .insert(like)
    .then(() => getLikes())
    .then((allLikes) => {
      const match = allLikes.find(element => element.human_id === like.liked_human_id && element.liked_human_id === like.human_id)
      if (match) {
        const newMatch = {
          human_one: like.human_id,
          human_two: like.liked_human_id
        }
        return matchFunc.addAMatch(newMatch)
      } else { return null }
    })
}

module.exports = {
  getLikes,
  addALike
}
