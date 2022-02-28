import React from 'react'

import { fallDown as Menu } from 'react-burger-menu'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

const Navigation = () => {
  const { loginWithRedirect, logout } = useAuth0()
  function handleLogoff (e) {
    e.preventDefault()
    logout()
    // console.log('log off')
  }

  function handleRegister (e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/profile`
    })
  }

  function handleSignIn (e) {
    e.preventDefault()
    loginWithRedirect()
  }
  return (

    <>
      <Menu customBurgerIcon={ <img src='images/nav-icon.png'/> } >
        <a className="menu-item" href="/home">
        Home
        </a>
        <a className="menu-item" href="/profile">

        profile

        </a>
        <a className="menu-item" href="/chat">
        Pizzas
        </a>
      </Menu>

      {/* <Navbar collapseOnSelect fixed='top' expand={false} bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/home'> Home</Nav.Link>
              <Nav.Link href='/profile'> Profile</Nav.Link>
              <Nav.Link href='/chat'> Chat</Nav.Link>
              <IfAuthenticated>
                <a href='/' onClick={handleLogoff}> Log off</a>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <a href='/' onClick={handleRegister}> Register</a>
                <a href='/' onClick={handleSignIn}> Sign in</a>
              </IfNotAuthenticated>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar> */}
    </>
  )
}

export default Navigation
