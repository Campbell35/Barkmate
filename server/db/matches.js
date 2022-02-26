const connection = require('./connection')

function getMatches (db = connection) {
  return db('matches').select()
}

function addAMatch (match, db = connection) {
  return db('matches').insert(match)
    .then(() => null)
}

module.exports = {
  getMatches,
  addAMatch
}
