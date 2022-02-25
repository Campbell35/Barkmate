const connection = require('./connection')

function getMatches(db = connection) {
  return db('matches').select()
}

module.exports = {
  getMatches
}
