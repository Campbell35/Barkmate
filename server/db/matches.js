const connection = require('./connection')

// Match table not really needed, as its duplicating data we already have
// i.e all the data we need is in like table
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
