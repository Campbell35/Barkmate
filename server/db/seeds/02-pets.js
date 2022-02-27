exports.seed = (knex) => {
  return knex('pets').del()
    .then(() => {
      return knex('pets').insert([
        { id: 1, name: 'Rocky', breed: 'Cavalier King Charles Spaniel', owner_id: 2, energy_levels: 4, images: 'http://cdn.akc.org/content/article-body-image/cavkingcharlessmalldogs.jpg', pats: 9, treats: 7 },
        { id: 2, name: 'Hugo', breed: 'Yakutian Laika', owner_id: 1, energy_levels: 5, images: 'https://www.k9ofmine.com/wp-content/uploads/2021/02/yakutian-laika.jpg', pats: 7, treats: 9 },
        { id: 3, name: 'Rascal', breed: 'husky', owner_id: 3, energy_levels: 2, images: 'https://www.desktopbackground.org/p/2011/06/01/212304_cute-baby-husky-wallpaper_2560x1600_h.jpg', pats: 7, treats: 9 },
        { id: 4, name: 'Tiny', breed: 'pug', owner_id: 4, energy_levels: 3, images: 'https://www.allthingsdogs.com/wp-content/uploads/2020/02/Pug-Feature-678x381.jpg', pats: 7, treats: 9 },
        { id: 5, name: 'Gertrude', breed: 'Norfolk Terrier', owner_id: 5, energy_levels: 1, images: 'http://cdn.akc.org/content/article-body-image/norfolkterriersmalldogs.jpg', pats: 7, treats: 9 },
        { id: 6, name: 'Apple', breed: 'bulldog', owner_id: 5, energy_levels: 1, images: 'https://c4.wallpaperflare.com/wallpaper/606/740/844/best-friends-bulldog-cute-dog-photos-dog-images-wallpaper-preview.jpg', pats: 7, treats: 9 }
      ])
    })
}
