import React, { useEffect, useState } from 'react'
import { getHumansByID, getPetsByOwners } from '../api'
import { useSelector } from 'react-redux'
import Navigation from './Navigation/Navigation'

function Matches () {
  const owner = useSelector(state => state.human)
  const matches = useSelector(state => state.matches)
  const [petArr, setPetArr] = useState([])
  const [theID, setTheID] = useState([])
  const [unfurl, setUnfurl] = useState(false)
  const [matchedHuman, setMatchedHuman] = useState([])

  function setStuff () {
    const ids = matches.map(obj => {
      const arr = Object.values(obj)
      const filtered = arr.filter(val => val !== owner.id && val !== obj.id)
      for (let i = 0; i < filtered.length; i++) {
        return filtered[i]
      }
    })
    setTheID(ids)
    getHumansByID(ids, owner.token)
      .then(humans => {
        console.log(humans)
        setMatchedHuman(humans)
        return null
      })
      .then(() => {
        return getPetsByOwners(ids, owner.token)
      })
      .then(pets => {
        console.log(pets)
        setPetArr(pets.petsByOwners)
        return null
      })
      .catch(err => console.log(err.message))
  }

  function handleUnfurl () {
    (!unfurl)
      ? setUnfurl(true)
      : setUnfurl(false)
  }

  function chatBtnClick () {
    //   navigate('/chat')
  }

  useEffect(() => {
    setStuff()
  }, [matches])

  if (owner.token) {
    return (
      <div className="dog-card-container">
        <div className="dog-card">
          <Navigation/>
          <img className='logoimg' src='/images/Logo.png'/>
          <h1>My matches</h1>
          {!unfurl
            ? <p onClick={handleUnfurl}>click to show dogs + </p>
            : <p onClick={handleUnfurl}>click to hide dogs - </p>
          }
          {matchedHuman
            ? matchedHuman.map(human => {
              const doggies = petArr.filter(pet => Number(pet.owner_id) === Number(human.id))
              return (
                <>
                  <p key="human.id" onClick={handleUnfurl}>{human.name}
                    {unfurl
                      ? doggies.map(pet => (
                        <>
                          <ul className="nobull">
                            <div className ="owner-pet-border2">
                              <li>
                                <div className='round-img'>
                                  <img className ="owner-pet-image" src={pet.images}>

                                  </img></div>
                                <div className='mypet-text'>
                                  {pet.name}<br></br></div>
                              </li>
                            </div>
                            <br></br>
                          </ul>
                        </>
                      ))
                      : <p></p>
                    }
                  </p></>)
            })
            : <p>loading</p>
          }
        </div>
        <button className='btnform' onClick={chatBtnClick}>Chat</button>
      </div>

    )
  } else {
    return (<div> LOADING ... </div>)
  }
}
// mapping over pets and display them as images
// add a new pet
// username
// post code
// edit profile button

export default Matches
