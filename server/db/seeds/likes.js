exports.seed = (knex) => {
  return knex('likes').del()
    .then(() => {
      return knex('likes').insert([{ id: 1, pet_id: 1, liked_pet_id: 2 }
      ])
    })
}
