import React, { useEffect, useState } from 'react'
import { getPetsByOwner } from '../../api'
import { useSelector } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import { useNavigate } from 'react-router-dom'

function HumanProfile () {
  const owner = useSelector(state => state.human)
  const navigate = useNavigate()
  console.log(owner)

  const [petArr, setPetArr] = useState([])
  useEffect(() => {
    getPetsByOwner(owner.id, owner.token)
      .then(pets => {
        console.log(pets)
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

  function handleAdd (e) {
    navigate('/petprofile/create')
  }

  if (owner.token) {
    return (
      <>
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
                    </li>
                  </div>
                  <br></br>
                </ul>
              </>
            ))}
            <div>
              <button className='btnform' onClick={handleAdd}>Add a pet</button>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (<div className='loadingIcon'><img className='loadingIcon' src='images/dog_walk_loading.gif' alt='loading icon'></img></div>)
  }
}

export default HumanProfile
