const connection = require('./connection')

function getHumans (id, db = connection) {
  return db('humans')
    .where({
      auth0_id: id
    })
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
