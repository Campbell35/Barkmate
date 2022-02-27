exports.seed = (knex) => {
  return knex('likes').del()
    .then(() => {
      return knex('likes').insert([{ id: 1, human_id: 1, liked_human_id: 2 }
      ])
    })
}
