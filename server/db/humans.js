const connection = require('./connection')

function getHuman (id, db = connection) {
  return db('humans')
    .where({
      auth0_id: id
    })
    .first()
}

function addAHuman (human, db = connection) {
  return db('humans')
    .insert(human)
    .then(() => null)
}

module.exports = {
  getHuman,
  addAHuman
}
