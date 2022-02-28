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
        petArr.map(pet => (<>

          <div className ="petImageYo">
            <li><img src={pet.images}></img></li>
          </div>
          <li>NAME:{pet.name}</li>
          <li>ENERGY LEVELS:{pet.energy_levels}</li>
          <li>PATS:{pet.pats}</li>
          <li><p>TREATS:</p>{pet.treats}</li>

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
