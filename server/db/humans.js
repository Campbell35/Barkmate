const connection = require('./connection')

function getHumans (db = connection) {
  return db('humans').select()
}

function addAHuman (human, db = connection) {
  return db('humans')
    .insert(human)
    .then(() => null)
}

module.exports = {
  getHumans,
  addAHuman
}
