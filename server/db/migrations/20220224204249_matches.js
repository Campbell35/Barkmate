exports.up = (knex) => {
  return knex.schema.createTable('matches', table => {
    table.increments('id').primary()
    table.integer('human_one').references('humans.id')
    table.integer('human_two').references('humans.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('matches')
}
