const connection = require('./connection')
const matchFunc = require('../db/matches')

function getLikes (db = connection) {
  return db('likes').select()
}

function addALike (like, db = connection) {
  return db('likes')
    .insert(like)
    // Below would no longer be needed as matches are found in real time

    // .then(() => getLikes())
    // .then((allLikes) => {
    //   const match = allLikes.find(element => element.human_id === like.liked_human_id && element.liked_human_id === like.human_id)
    //   if (match) {
    //     const newMatch = {
    //       human_one: like.human_id,
    //       human_two: like.liked_human_id
    //     }
    //     return matchFunc.addAMatch(newMatch)
    //   } else { return null }
    // })
}

function getCommonLikes(id, db = connection) { // gets the matches based on like table
  // the subquery gets all the people that like you
  const subQuery = db('likes')
    .join('humans', 'humans.id', '=', 'likes.liked_human_id')
    .where({
      'humans.auth0_id': id
    })
    .select('humans.id')
    // this uses the subquery in the whereIn to find the mutual likes
    // this means we can calculate the matches in real time, and then we can make the 
    // db a little less complicated by deleting the matches table 
  return db('likes')
    .join('humans', 'humans.id', '=', 'likes.human_id')
    .where({
      'humans.auth0_id': id
    })
    .whereIn('likes.liked_human_id', subQuery)
    .select('likes.liked_person_id')

    //then you can get the dets of each person's matches 
}

module.exports = {
  getLikes,
  addALike,
  getCommonLikes,
}
