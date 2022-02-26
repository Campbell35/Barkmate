exports.up = (knex) => {
  return knex.schema.createTable('likes', table => {
    table.increments('id').primary()
    table.integer('human_id').references('humans.id')
    table.integer('liked_human_id ').references('humans.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('likes')
}
