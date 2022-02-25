import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const initialState = {
  humans_name: '',
  post_code: ''
}

function CreateProfilePage () {
  // set form state
  const [form, setForm] = useState(initialState)
  const user = useSelector(state => state)

  function handleFormChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit (event) {
    event.preventDefault()
    await addHuman(form)
    await addUserToChat(form)
    setForm(initialState)
    history.push('/')
  }

  return (
    <>
      <form className='form-wrapper'>
        {/* humans_name */}
        <p>User Name:</p>
        <input type='text' placeholder='choose your username' name='humans_name' value={form.humans_name} onChange={handleFormChange} required/>
        <p>Post code:</p>
        <input type='text' name='post_code' value={form.post_code} onChange={handleFormChange} required/>
        <button type='button' onClick={handleSubmit}>Submit</button>
        {/* humans_gender */}
        {/* <input type='radio' name='humans_gender' value='female' onChange={handleFormChange}/>
        <label htmlFor='female'>Female</label>
        <input type='radio' name='humans_gender' value='male' onChange={handleFormChange}/>
        <label htmlFor='male'>Male</label>
        <input type='radio' name='humans_gender' value='non_binary' onChange={handleFormChange}/>
        <label htmlFor='non_binary'>Non-Binary</label> */}
      </form>

    </>
  )
}

export default CreateProfilePage
