import request from 'superagent'

import store from './store'

const rootUrl = '/api/v1'

export function getPetsByOwner (ownerId, token) {
  return request.get(`${rootUrl}/pets/ownerId`)
    .set('authorization', `Bearer ${token}`)
    .query({ query: ownerId })
    .then(res => {
      return res.body
    })
    .catch(logError)
}

function authRequest (method, path, params, token) {
  token = token || store.getState().human?.token
  const req = request[method](`${rootUrl}${path}`).set('Authorization', `Bearer ${token}`)

  if (params) {
    if (method === 'get') {
      req.query(params)
    }

    if (method === 'put' || method === 'post') {
      req.send(params)
    }
  }

  return req
}

export function getFruits () {
  return request.get(`${rootUrl}/fruits`)
    .then(res => {
      return res.body.fruits
    })
    .catch(logError)
}

export function getPets (token) {
  return request.get(`${rootUrl}/pets`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body.pets
    })
    .catch(logError)
}

export function getPet (id, token) {
  return request.get(`${rootUrl}/pets`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body.pets
    })
    .then(pets => {
      const pet = pets.find(pet => pet.id === id)
      return pet
    })
    .catch(logError)
}

export function addPet (pet, token) {
  return request.post(`${rootUrl}/pets`)
    .set('authorization', `Bearer ${token}`)
    .send(pet)
    .then(res => res.body.pets)
    .catch(logError)
}

export function addFruit (fruit, token) {
  return request.post(`${rootUrl}/fruits`)
    .set('authorization', `Bearer ${token}`)
    .send({ fruit })
    .then(res => res.body.fruits)
    .catch(logError)
}

export function addHuman (human) {
  return authRequest('post', '/human', human)
    .then(res => {
      return res.body.human
    })
    .catch(logError)
}

export function getHuman (token) {
  return authRequest('get', '/human', null, token)
    .then(res => {
      return res.body.human
    })
    .catch(logError)
}

export function getLikes (id, token) {
  return request.get(`${rootUrl}/likes`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body.likes
    })
    .then(likes => {
      const myLikes = likes.filter(like => like.human_id === id)
      // console.log(myLikes)
      return myLikes
    })
    .catch(logError)
}

export function addLike (likerId, likedId, token) {
  const entry = {
    human_id: likerId,
    liked_human_id: likedId
  }
  return request.post(`${rootUrl}/likes`)
    .set('authorization', `Bearer ${token}`)
    .send(entry)
    .then(res => res.body.likes)
    .catch(logError)
}

export function getMatches (id, token) {
  return request.get(`${rootUrl}/matches`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body.matches
    })
    .then(matches => {
      const myMatches = matches.filter(match => match.human_one === id || match.human_two === id)
      // console.log(myLikes)
      return myMatches
    })
    .catch(logError)
}

export function addUserToChat (user, token) {
  const chatUser = {
    username: user.name,
    secret: user.token,
    email: user.email,
    first_name: 'El',
    last_name: 'Dorra'
  }
  console.log(chatUser)
  return request.post('/chatapi')
  // .set('authorization', `Bearer ${token}`)
    .send(chatUser)
    .then(res => res.body.user)
    .catch(logError)
}

export function updateFruit (fruit, token) {
  return request.put(`${rootUrl}/fruits`)
    .set('authorization', `Bearer ${token}`)
    .send({ fruit })
    .then(res => res.body.fruits)
    .catch(logError)
}

export function deleteFruit (id, token) {
  return request.delete(`${rootUrl}/fruits/${id}`)
    .set('authorization', `Bearer ${token}`)
    .send()
    .then(res => res.body.fruits)
    .catch(logError)
}

export async function addUser (user, token) {
  return request.post(`${rootUrl}/users`)
    .send(user)
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the fruit may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}
