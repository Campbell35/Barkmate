const connection = require('./connection')

function getPets(db = connection) {
  return db('pets').select()
}

module.exports = {
  getPets
}
