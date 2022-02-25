exports.up = (knex) => {
  return knex.schema.createTable('matches', table => {
    table.increments('id').primary()
    table.integer('pet_one').references('pets.id')
    table.integer('pet_two').references('pets.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('matches')
}
