import React from 'react'
import Navigation from './Navigation/Navigation'
import { useAuth0 } from '@auth0/auth0-react'

function SignUpPage () {
  const { loginWithRedirect } = useAuth0()

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
    <div className="dog-card-container">
      <div className="dog-card">
        <Navigation/>
        <img className='logoimg' src='/images/Logo.png'/>
        <img className="dog-card-nav" />
        <img className="dog-card-img" src="https://www.pngkit.com/png/detail/6-66631_group-of-dogs-png.png"/>
        <h1 className='signup-text'>Find new Barkmates for your best friend!</h1>
        <button className='btnform' onClick={handleSignIn}>Sign In</button><br></br>
        <button className='btnform' onClick={handleRegister}>Register</button>
      </div>
    </div>
  )
}

export default SignUpPage
