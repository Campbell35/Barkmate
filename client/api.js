import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(`${rootUrl}/fruits`)
    .then(res => {
      return res.body.fruits
    })
    .catch(logError)
}

export function getPet (id) {
  return request.get(`${rootUrl}/pets`)
    .then(res => {
      return res.body.pets
    })
    .then(pets => {
      const pet = pets.find(pet => pet.id === id)
      console.log(pet)
      return pet
    })
    .catch(logError)
}

export function addFruit (fruit, token) {
  return request.post(`${rootUrl}/fruits`)
    .set('authorization', `Bearer ${token}`)
    .send({ fruit })
    .then(res => res.body.fruits)
    .catch(logError)
}

export function addUserToChat (user) {
  return request.post('/chat/api')
    .send({
      ...user,
      username: 'adam_la_morre',
      first_name: 'Adam',
      last_name: 'La Morre',
      secret: 'pass1234'
    })
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

export async function addUser (user) {
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
