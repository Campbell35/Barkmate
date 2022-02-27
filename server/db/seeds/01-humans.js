exports.seed = (knex) => {
  return knex('humans').del()
    .then(() => {
      return knex('humans').insert([
        { id: 1, auth0_id: '109', token: '88', name: 'Kate', email: 'kate@test.com' },
        { id: 2, auth0_id: '209', token: '99', name: 'Tarek', email: 'tarek@test.com' },
        { id: 3, auth0_id: '209', token: '99', name: 'KateT', email: 'kt@test.com' },
        { id: 4, auth0_id: '209', token: '99', name: 'Ben', email: 'ben@test.com' },
        { id: 5, auth0_id: '209', token: '99', name: 'Campbell', email: 'cpb@test.com' },
        { id: 6, auth0_id: '209', token: '99', name: 'Liz', email: 'lizzzz@test.com' }
      ])
    })
}
