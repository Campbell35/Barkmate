import { useAuth0 } from '@auth0/auth0-react'

import { setHuman } from './actions/human'
import { setLikes } from './actions/likes'
import { getHuman, getLikes } from './api'
import store from './store'

export async function cacheUser () {
  const state = store.getState()
  // TODO: call the useAuth0 and destructure:
  // isAuthenticated, getAccessTokenSilently and user

  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated && !state.human?.token) {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`
      })
      const existingHuman = await getHuman(accessToken)
      if (existingHuman) {
        const likes = await getLikes(existingHuman.id)
        store.dispatch(setHuman(existingHuman))
        store.dispatch(setLikes(likes))
      } else {
        const userToSave = {
          auth0Id: user.sub,
          email: user.email,
          token: accessToken
        }
        store.dispatch(setHuman(userToSave))
      }
    } catch (err) {
      console.error(err)
    }
  }
}
