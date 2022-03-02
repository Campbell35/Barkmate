import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import ProfilePage from './Profile/CreateProfilePage'
import PetProfile from './Profile/PetProfile'
import FrontPage from './FrontPage'
import Chat from './Chat'
import HumanProfile from './Profile/HumanProfile'
import SignUpPage from './SignUpPage'

function App () {
  cacheUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<FrontPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile/create" element={<ProfilePage />} />
        <Route path="/petprofile" element={<PetProfile />} />
        <Route path="/profile" element={<HumanProfile />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
