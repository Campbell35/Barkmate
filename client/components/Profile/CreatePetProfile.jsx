import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addPet } from '../../api'
import Navigation from '../Navigation/Navigation'
import { useNavigate } from 'react-router-dom'

function ProfilePage () {
  const owner = useSelector(state => state.human)
  const navigate = useNavigate()
  console.log(owner)
  const [form, setForm] = useState({
    name: '',
    breed: '',
    owner_id: owner.id,
    energy_levels: 'Very Low',
    images: '',
    quote: '',
    pats: 0,
    treats: 0
  })

  function handleFormChange (event) {
    setForm({
      ...form,
      owner_id: owner.id,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    addPet(form, owner.token)
    navigate('/profile')
    console.log('pet added')
  }

  return (
    <>
      <div className="dog-card-container">
        <div className="dog-card">
          <Navigation/>
          <img className='logoimg' src='/images/Logo.png'/>
          {/* <div className='form-div-pet'> */}
          <form className='form-wrapper'>
            {/* pets_name  */}
            <p className='form-p'>Pet name:</p>
            <input type='text' placeholder='Enter your dog&apos;s name' name='name' value={form.name} onChange={handleFormChange} required/>
            {/* pets_breed */}
            <p className='form-p'>Breed:</p>
            <input type='text' placeholder='Enter your dog&apos;s breed' name='breed' value={form.breed} onChange={handleFormChange} required/>
            {/* pets_energy_levels */}
            <p className='form-p'>Energy Level:</p>
            <select id="energy_levels" name="energy_levels" onChange={handleFormChange}>
              <option value="Very Low">Very Low</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
            {/* pets_breed */}
            <p className='form-p'>Image Link:</p>
            <input type='text' placeholder='Link to your dog&apos;s picture' name='images' value={form.images} onChange={handleFormChange} required/>
            {/* pets_description */}
            <p className='form-p'>Description:</p>
            <textarea type='text' className='description-text' placeholder='Describe your dog in a short paragraph!' name='quote' value={form.quote} onChange={handleFormChange} required/>

          </form>
          <button type='button' className='btnform' onClick={handleSubmit}>Submit</button>

        </div>
      </div>
    </>
  )
}

export default ProfilePage
