exports.seed = (knex) => {
  return knex('pets').del()
    .then(() => {
      return knex('pets').insert([
        { id: 1, name: 'Rocky', breed: 'Cavalier King Charles Spaniel', owner_id: 2, energy_levels: 4, images: 'http://cdn.akc.org/content/article-body-image/cavkingcharlessmalldogs.jpg', quote: 'I am a hellraiser by night', pats: 9, treats: 7 },
        { id: 2, name: 'Hugo', breed: 'Yakutian Laika', owner_id: 1, energy_levels: 5, images: 'https://www.k9ofmine.com/wp-content/uploads/2021/02/yakutian-laika.jpg', quote: 'I can see your naked soul, human', pats: 7, treats: 9 },
        { id: 3, name: 'Rascal', breed: 'Husky', owner_id: 3, energy_levels: 2, images: 'https://www.desktopbackground.org/p/2011/06/01/212304_cute-baby-husky-wallpaper_2560x1600_h.jpg', quote: 'I like to bark A LOT WOOF WOOF WOOF WOOF WOOF', pats: 7, treats: 9 },
        { id: 4, name: 'Tiny', breed: 'Pug', owner_id: 4, energy_levels: 3, images: 'https://www.allthingsdogs.com/wp-content/uploads/2020/02/Pug-Feature-678x381.jpg', quote: 'Never underestimate a pug. We are quite sophistacted thank you very much', pats: 7, treats: 9 },
        { id: 5, name: 'Gertrude', breed: 'Norfolk Terrier', owner_id: 5, energy_levels: 1, images: 'http://cdn.akc.org/content/article-body-image/norfolkterriersmalldogs.jpg', quote: "I may look cute, but I'm an absolute terror hahahahaha", pats: 7, treats: 9 },
        { id: 6, name: 'Apple', breed: 'bulldog', owner_id: 5, energy_levels: 1, images: 'https://c4.wallpaperflare.com/wallpaper/606/740/844/best-friends-bulldog-cute-dog-photos-dog-images-wallpaper-preview.jpg', quote: 'No, leave me alone.', pats: 7, treats: 9 }
      ])
    })
}
