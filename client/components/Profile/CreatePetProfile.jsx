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
      <form className='form-wrapper'>
        {/* pets_name  */}
        <input type='text' name='pets_name' value={form.pets_name} onChange={handleFormChange} required/>
        {/* pets_breed */}
        <input type='text' name='pets_breed' value={form.pets_breed} onChange={handleFormChange} required/>
        {/* pets_temprament */}
        <input type='text' name='pets_temprament' value={form.pets_temprament} onChange={handleFormChange} required/>
        {/* pets_energy_levels */}
        <input type='radio' name='pets_energy_levels' value='1' onChange={handleFormChange}/>
        <label htmlFor='1'>+</label>
        <input type='radio' name='pets_energy_levels' value='2' onChange={handleFormChange}/>
        <label htmlFor='2'>+</label>
        <input type='radio' name='pets_energy_levels' value='3' onChange={handleFormChange}/>
        <label htmlFor='3'>+</label>
        <input type='radio' name='pets_energy_levels' value='4' onChange={handleFormChange}/>
        <label htmlFor='4'>+</label>
        <input type='radio' name='pets_energy_levels' value='5' onChange={handleFormChange}/>
        <label htmlFor='5'>+</label>
        {/* pets_description */}
        <input type='text' name='pets_description' value={form.pets_description} onChange={handleFormChange} required/>
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>

    </>
  )
}

export default ProfilePage
