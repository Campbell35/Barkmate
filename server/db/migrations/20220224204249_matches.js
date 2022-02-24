exports.up = (knex) => {
  return knex.schema.createTable('matches', table => {
    table.increments('id').primary()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('matches')
}
