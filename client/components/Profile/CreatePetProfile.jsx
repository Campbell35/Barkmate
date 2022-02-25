import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const initialState = {
  pets_name: '',
  pets_breed: '',
  pets_temprament: '',
  pets_energy_levels: '',
  pets_description: '',
  pet_image_link: ''

}

function ProfilePage () {
  // set form state
  const [form, setForm] = useState(initialState)

  function handleFormChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit (event) {
    event.preventDefault()
    await addPet(form)
    setForm(initialState)
    history.push('/')
  }

  return (
    <>
      <div className='form-div-pet'>
        <form className='form-wrapper'>
          {/* pets_name  */}
          <p className='form-p'>Pet name:</p>
          <input type='text' placeholder='Enter your dog&apos;s name' name='pets_name' value={form.pets_name} onChange={handleFormChange} required/>
          {/* pets_breed */}
          <p className='form-p'>Breed:</p>
          <input type='text' placeholder='Enter your dog&apos;s breed' name='pets_breed' value={form.pets_breed} onChange={handleFormChange} required/>
          {/* pets_energy_levels */}
          <p className='form-p'>Energy Level:</p>
          <select id="energylevel" name="energylevel" onChange={handleFormChange}>
            <option value="1">Very Low</option>
            <option value="2">Low</option>
            <option value="3">Moderate</option>
            <option value="4">High</option>
            <option value="5">Very High</option>
          </select>
          {/* pets_description */}
          <p className='form-p'>Description:</p>
          <textarea type='text' className='description-text' placeholder='Describe your dog in a short paragraph!' name='pets_description' value={form.pets_description} onChange={handleFormChange} required/>
        </form>
        <button type='button' onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default ProfilePage
