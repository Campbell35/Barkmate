import { setHuman } from './actions/human'
import { setLikes } from './actions/likes'
import { getHuman, getLikes } from './api'
import store from './store'

export async function cacheUser (useAuth0, state) {
  // TODO: call the useAuth0 and destructure:
  // isAuthenticated, getAccessTokenSilently and user

  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated && !state?.token) {
    try {
      const accessToken = await getAccessTokenSilently()
      const existingHuman = await getHuman(user.sub)
      console.log(existingHuman)
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
        console.log(userToSave)
      }
    } catch (err) {
      console.error(err)
    }
  }
}
