const connection = require('./connection')

function getHuman (id, db = connection) {
  return db('humans')
    .where({
      auth0_id: id
    })
    .first()
}

function getHumans (ids, db = connection) {
  return db('humans').select()
    .whereIn('id', ids)
}

function addAHuman (human, db = connection) {
  return db('humans')
    .insert(human)
    .then(() => null)
}

module.exports = {
  getHuman,
  addAHuman,
  getHumans
}
