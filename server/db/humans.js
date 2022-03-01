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

function getPatsLeft (id, db = connection) {
  return db('humans')
    .select('pats')
    .where('id', id)
}

async function updatePat (id, pats, db = connection) {
  console.log(pats)
  return db('humans')
    .where('id', id)
    .update({ pats: pats - 1 })
    .then(() => null)
}

module.exports = {
  getHuman,
  addAHuman,
  getHumans,
  getPatsLeft,
  updatePat
}
