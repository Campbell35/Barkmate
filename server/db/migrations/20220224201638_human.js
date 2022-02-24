exports.up = (knex) => {
  return knex.schema.createTable('humans', table => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id')
    table.string('token')
    table.string('name')
    table.string('email')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('humans')
}
