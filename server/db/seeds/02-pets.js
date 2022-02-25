exports.seed = (knex) => {
  return knex('pets').del()
    .then(() => {
      return knex('pets').insert([
        { id: 1, name: 'Rocky', breed: 'husky', owner_id: 2, energy_levels: 4, images: 'hot', pats: 9, treats: 7 },
        { id: 2, name: 'Hugo', breed: 'mixed', owner_id: 1, energy_levels: 5, images: 'cute', pats: 7, treats: 9 }
      ])
    })
}
