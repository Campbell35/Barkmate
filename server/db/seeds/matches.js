exports.seed = (knex) => {
  return knex('matches').del()
    .then(() => {
      return knex('matches').insert([
        { id: 1 },
        { id: 2 }
      ])
    })
}
