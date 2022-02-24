exports.up = (knex) => {
  return knex.schema.createTable('likes', table => {
    table.increments('id').primary()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('likes')
}
