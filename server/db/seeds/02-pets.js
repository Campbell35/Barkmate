exports.seed = (knex) => {
  return knex('pets').del()
    .then(() => {
      return knex('pets').insert([
        { id: 1, name: 'Rocky', breed: 'husky', owner_id: 2, energy_levels: 4, images: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg', pats: 9, treats: 7 },
        { id: 2, name: 'Hugo', breed: 'mixed', owner_id: 1, energy_levels: 5, images: 'https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg', pats: 7, treats: 9 },
        { id: 3, name: 'Rascal', breed: 'pug', owner_id: 3, energy_levels: 2, images: 'https://miro.medium.com/max/1400/1*XBC9diIIlWIbbE8BVXgulA.jpeg', pats: 7, treats: 9 },
        { id: 4, name: 'Tiny', breed: 'great dane', owner_id: 4, energy_levels: 3, images: 'https://media.npr.org/assets/img/2014/09/12/ap300370671383_wide-e907716e290a0b70af798f66abe5b7e4ef40d8dd.jpg', pats: 7, treats: 9 },
        { id: 5, name: 'Gertrude', breed: 'collie', owner_id: 5, energy_levels: 1, images: 'https://www.akc.org/wp-content/uploads/2017/11/Collie-standing-in-a-field.jpg', pats: 7, treats: 9 }

      ])
    })
}
