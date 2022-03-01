import React, { useEffect, useState } from 'react'
import { getPetsByOwner } from '../../api'
import { useSelector } from 'react-redux'
import Navigation from '../Navigation/Navigation'


function handleAdd (e) {
  e.preventDefault()
  loginWithRedirect({
    redirectUri: `${window.location.origin}/petprofile/create`
  })
}

function HumanProfile () {
  const owner = useSelector(state => state.human)
  const [petArr, setPetArr] = useState([])
  useEffect(() => {
    getPetsByOwner(owner.id, owner.token)
      .then(pets => {
        const thepets = setPetArr(pets.petsByOwner)
        return thepets
      })
      .then(thepets => {
        if (thepets === []) {
          window.location.href = '/petprofile/create'
        } else { return null }
        return null
      })
      .catch(err => console.log(err.message))
  }, [owner.token])

  if (owner.token) {
    return (
      <div className="dog-card-container">
        <div className="dog-card">
          <Navigation/>
          <img className='logoimg' src='/images/Logo.png'/>
          <p>{owner.name}&apos;s profile</p>
          <h1>My dogs:</h1>
          {petArr.map(pet => (
            <>
              <ul className="nobull">
                <div className ="owner-pet-border">
                  <li>
                    <div className='round-img'>
                      <img className ="owner-pet-image" src={pet.images}>

                      </img></div>
                    <div className='mypet-text'>
                      {pet.name}<br></br><span className='subtitle-pets'>
                    ENERGY LEVELS: {pet.energy_levels} <br></br>
                    TOTAL PATS: {pet.pats} <br></br>
                    MY QUOTE: {pet.quote}</span></div>
                      
                    <div>
                     <button className='btnform' onClick={handleAdd}>Add a pet</button>
                    </div>
  
                  </li>
                </div>
                <br></br>
              </ul>
            </>
          ))}
        </div>
      </div>
    )
  } else {
    return (<div> LOADING ... </div>)
  }
}
// mapping over pets and display them as images
// add a new pet
// username
// post code
// edit profile button

export default HumanProfile
