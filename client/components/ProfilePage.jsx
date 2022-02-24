import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const initialState = {
    pets_name: '',
    pets_breed: '',
    pets_temprament: '',
    pets_energy_levels: '',
    pets_description: '',
    humans_name: '',
    humans_gender: ''
    
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

    function handleSubmit (event) {
        event.preventDefault()

        setForm(initialState)
        history.push('/')

    }

        return (
            <>
            <form>
                {/* pets_name  */}
                <input type='text' name='pets_name' value='form.pets_name' onChange={handleFormChange} required/>
                {/* pets_breed */}
                <input type='text' name='pets_breed' value='form.pets_breed' onChange={handleFormChange} required/>
                {/* pets_temprament */}
                <input type='text' name='pets_temprament' value='form.pets_temprament' onChange={handleFormChange} required/>
                {/* pets_energy_levels */}
                <input type='radio' name='pets_energy_levels' value='1' onChange={handleFormChange}/>
                    <label for='1'>+</label>
                <input type='radio' name='pets_energy_levels' value='2' onChange={handleFormChange}/>
                    <label for='2'>+</label>
                <input type='radio' name='pets_energy_levels' value='3' onChange={handleFormChange}/>
                    <label for='3'>+</label>
                <input type='radio' name='pets_energy_levels' value='4' onChange={handleFormChange}/>
                    <label for='4'>+</label>
                <input type='radio' name='pets_energy_levels' value='5' onChange={handleFormChange}/>
                    <label for='5'>+</label>    
                {/* pets_description */}
                <input type='text' name='pets_description' value='form.pets_description' onChange={handleFormChange} required/>
                {/* humans_name */}
                <input type='text' name='humans_name' value='form.humans_name' onChange={handleFormChange} required/>
                {/* humans_gender */}
                <input type='radio' name='humans_gender' value='female' onChange={handleFormChange}/>
                    <label for='female'>Female</label>
                <input type='radio' name='humans_gender' value='male' onChange={handleFormChange}/>
                    <label for='male'>Male</label>
                <input type='radio' name='humans_gender' value='non_binary' onChange={handleFormChange}/>
                    <label for='non_binary'>Non-Binary</label>
            </form>


            </>
        )
}

export default ProfilePage