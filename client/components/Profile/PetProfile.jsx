import React, { useState, useEffect } from 'react'
import { getPet } from '../../api'

function PetProfile ({ id }) {
  const [error, setError] = useState('')
  const [pet, setPet] = useState({})

  useEffect(() => {
    // filter the pet's id in the API function
    getPet(1)
      .then(pet => setPet(pet))
      .catch(err => setError(err.message))
  }, [])

  return (
    // load up the pet image straight from DB
    // load up the pet name straight from DB
    // load up the pet data straight from DB
    // should be based on pet id, get ID from propdrill from owners page
    <div>TEST
      <p>{pet.images}</p>
      <p>{pet.name}</p>
      <p>{pet.energy_levels}</p>
    </div>
  )
}

export default PetProfile
