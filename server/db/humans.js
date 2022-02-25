const connection = require('./connection')

function getHumans(db = connection) {
  return db('humans').select()
}

module.exports = {
  getHumans
}
