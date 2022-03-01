import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addHuman, addUserToChat } from '../../api'
import { setHuman } from '../../actions/human'
import Navigation from '../Navigation/Navigation'

function CreateProfilePage () {
  // set form state
  const dispatch = useDispatch()
  const [form, setForm] = useState({})
  const human = useSelector(state => state.human)
  const history = useHistory()
  console.log(human)

  useEffect(() => {
    setForm({
      auth0_id: human?.auth0Id,
      email: human?.email,
      token: human?.token,
      name: ''
    })
  }, [human])

  function handleFormChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit (event) {
    event.preventDefault()
    dispatch(setHuman(form))
    history.push('/profile')
    await addHuman(form)
    await addUserToChat(form)
  }

  return (
    <div className="dog-card-container">
      <div className="dog-card">
        <Navigation/>
        <img className='logoimg' src='/images/Logo.png'/>
        {/* <div className='full'> */}
        {/* <div className='form-div'> */}
        <form className='form-wrapper'>
          {/* humans_name */}
          <p className='form-p'>Username:</p>
          <input type='text' placeholder='Choose your Username' name='name' value={form.name} onChange={handleFormChange} required/>
          <p className='form-p'>Post code:</p>
          <input type='text' placeholder='Enter your post code' name='post_code' value={form.post_code} required/>
          {/* humans_gender */}
          {/* <input type='radio' name='humans_gender' value='female' onChange={handleFormChange}/>
        <label htmlFor='female'>Female</label>
        <input type='radio' name='humans_gender' value='male' onChange={handleFormChange}/>
        <label htmlFor='male'>Male</label>
        <input type='radio' name='humans_gender' value='non_binary' onChange={handleFormChange}/>
        <label htmlFor='non_binary'>Non-Binary</label> */}
        </form>
        <button type='button' className='btnform' onClick={handleSubmit}>Submit</button>
      </div>

      {/* </div></div> */}
    </div>
  )
}

export default CreateProfilePage
