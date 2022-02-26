exports.seed = (knex) => {
  return knex('matches').del()
    .then(() => {
      return knex('matches').insert([{ id: 1, human_one: 1, human_two: 2 }
      ])
    })
}
