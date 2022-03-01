exports.up = (knex) => {
  return knex.schema.createTable('pets', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('breed')
    table.string('owner_id').references('users.auth0_id')
    table.string('energy_levels')
    table.string('images')
    table.string('quote')
    table.integer('pats')
    table.integer('treats')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('pets')
}
