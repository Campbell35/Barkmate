import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Fruits from './Fruits'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import ProfilePage from './ProfilePage'

function App () {
  cacheUser(useAuth0)
  return (
    <Router>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Fruits} />
      <Route exact path='/profile' component={ProfilePage} />
    </Router>
  )
}

export default App
