exports.seed = (knex) => {
  return knex('humans').del()
    .then(() => {
      return knex('humans').insert([
        { id: 1, auth0_id: '109', token: '88', name: 'Kate', email: 'kate@test.com' },
        { id: 2, auth0_id: '209', token: '99', name: 'Tarek', email: 'tarek@test.com' }
      ])
    })
}
