const connection = require('./connection')

function getLikes (db = connection) {
  return db('likes').select()
}

function addALike (like, db = connection) {
  return db('likes')
    .insert(like)
    .then(() => null)
}

module.exports = {
  getLikes,
  addALike
}
