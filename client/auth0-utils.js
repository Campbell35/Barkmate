import { setUser } from './actions/user'
import store from './store'

export async function cacheUser(useAuth0, state) {
  // TODO: call the useAuth0 and destructure:
  // isAuthenticated, getAccessTokenSilently and user

  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated && !state?.token) {
    const accessToken = await getAccessTokenSilently()
    try {
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: accessToken
      }

      store.dispatch(setUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
