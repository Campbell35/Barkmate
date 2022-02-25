exports.up = (knex) => {
  return knex.schema.createTable('likes', table => {
    table.increments('id').primary()
    table.integer('pet_id').references('pets.id')
    table.integer('liked_pet_id ').references('pets.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('likes')
}
