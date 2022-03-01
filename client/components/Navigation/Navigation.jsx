import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { fallDown as Menu } from 'react-burger-menu'

function Navigation () {
  const { loginWithRedirect, logout } = useAuth0()
  function handleLogoff (e) {
    e.preventDefault()
    logout()
    // console.log('log off')
  }

  function handleRegister (e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/profile/create`
    })
  }

  function handleSignIn (e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/home`
    })
  }
  return (
    <Menu>
      <div className="nav-text">
        <a className="menu-item" href="/home">
        Home
        </a><br></br>

        <a className="menu-item" href="/profile">
        Profile
        </a><br></br>

        <a className="menu-item" href="/chat">
        Chat
        </a><br></br>

        <IfAuthenticated>
          <a href='/' className="menu-item" onClick={handleLogoff}>Log off</a>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <a href='/' className="menu-item" onClick={handleRegister}>Register or </a>
          <a href='/' className="menu-item" onClick={handleSignIn}>Sign in</a>
        </IfNotAuthenticated>
      </div>
    </Menu>
  )
}

export default Navigation
