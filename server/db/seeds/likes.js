exports.seed = (knex) => {
  return knex('likes').del()
    .then(() => {
      return knex('likes').insert([
        { id: 1 },
        { id: 2 }
      ])
    })
}
