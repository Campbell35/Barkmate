exports.seed = (knex) => {
  return knex('matches').del()
    .then(() => {
      return knex('matches').insert([{ id: 1, pet_one: 1, pet_two: 2 }
      ])
    })
}
