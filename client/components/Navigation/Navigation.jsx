import React from 'react'

import { fallDown as Menu } from 'react-burger-menu'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import { useAuth0 } from '@auth0/auth0-react'

// import './sidebar.css'

// const Navigation = () => {
// const { loginWithRedirect, logout } = useAuth0()
// function handleLogoff (e) {
//   e.preventDefault()
//   logout()
//   // console.log('log off')
// }

// function handleRegister (e) {
//   e.preventDefault()
//   loginWithRedirect({
//     redirectUri: `${window.location.origin}/profile`
//   })
// }

// function handleSignIn (e) {
//   e.preventDefault()
//   loginWithRedirect()
// }

function Navigation () {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
  )
}

export default Navigation
