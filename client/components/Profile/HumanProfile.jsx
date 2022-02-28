import React, { useEffect, useState } from 'react'
import { getPetsByOwner } from '../../api'
import { useSelector } from 'react-redux'

function HumanProfile () {
  const owner = useSelector(state => state.human)
  const [petArr, setPetArr] = useState([])
  useEffect(() => {
    getPetsByOwner(owner.id, owner.token)
      .then(pets => {
        console.log(pets)
        setPetArr(pets.petsByOwner)
        return null
      })
      .catch(err => console.log(err.message))
  }, [owner.token])
  if (owner.token) {
    if (petArr !== []) {
      return (
        petArr.map(pet => (
          <>
            <div className="owner-pet-container">
              <div className="dog-card">
                <div className="container21">
                  <img className="dog-card-nav" src='/images/nav-icon.png'/>
                </div>

                <ul className="nobull">
                  <div className ="owner-pet-border">
                    <li>{pet.name}
                      <img className ="owner-pet-image" src={pet.images}>

                      </img>
                    </li>
                  </div>
                  <br></br>
                  <li>ENERGY LEVELS: {pet.energy_levels}</li>
                  <br></br>
                  <li>DESCRIPTION: What A Pet!</li>
                  <br></br>
                  <li>PATS: {pet.pats}</li>
                  <br></br>
                  <li>TREATS: {pet.treats}</li>
                </ul>
              </div>
            </div>

          </>
        )))
    } else {
      return (<div> LOADING ... </div>)
    }

    // mapping over pets and display them as images
    // add a new pet
    // username
    // post code
    // edit profile button
  } else {
    return (<div>LOADING...</div>)
  }
}

export default HumanProfile
