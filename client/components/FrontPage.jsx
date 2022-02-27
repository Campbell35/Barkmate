import React, { useState, useEffect } from 'react'
import { getPets, addLike } from '../api'
import { useSelector } from 'react-redux'

const Frontpage = () => {
  const [error, setError] = useState('')
  const [pet, setPet] = useState({})
  const [petArr, setPetArr] = useState([])
  const [ind, setInd] = useState(1)
  const [liked, setLiked] = useState(false)
  const [welp, setWelp] = useState(false)
  const owner = useSelector(state => state.human)
  const likes = useSelector(state => state.likes)
  // console.log(owner)

  useEffect(() => {
    getPets(owner.token)
      .then(pets => {
        const arr = Array.from(Array(pets.length).keys())
        const shuffled = arr
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
        const thePet = pets[shuffled[0]]
        setPetArr(shuffled)
        return setPet(thePet)
      })
      .catch(err => setError(err.message))
  }, [owner.token])

  async function clickHandleLike () {
    await addLike(owner.id, Number(pet.owner_id), owner.token)
    setLiked(true)
  }

  function clickHandleRight () {
    setLiked(false)
    setInd(ind + 1)
    const newPetInd = petArr[ind]
    if (ind < petArr.length) {
      getPets(owner.token)
        .then(pets => {
          return setPet(pets[newPetInd])
        })
        .catch(err => setError(err.message) && console.log(error))
    } else {
      setWelp(true)
    }
  }
  if (welp === false) {
    return (
      <>
        <div className="dog-card-container">
          <div className="dog-card">
            <h1>BARKMATES</h1>
            <img className="dog-card-nav" src='/images/nav-icon.png'/>
            <img className="dog-card-img" src={pet.images}/>
            {/* <b>//Name :// </b> */}
            <h3> {pet.name} </h3>

            {/* <b>Breed : </b> */}
            <p> {pet.breed} </p>

            {/* <b>Energy Levels: </b> */}
            {/* <p> Energy Level: pet.energy_levels} </p> */}

            {/* <b>Description: </b> */}
            {/* <p> Little lover boy!!</p> */}

            <p> VIEW PROFILE </p>

            <div className="clear"></div>

          </div>

          <div className="container21">
            <div>
              <button className="button21">
                <div className="icon21">
                  <svg viewBox="0 0 16 16" className="bi bi-telegram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                  </svg>
                </div>
                <p>SEND PAT</p>
              </button>
            </div>
            <div>

              {/* <p>Match ME</p> */}
              {!owner.id
                ? <p>loading</p>
                : likes.find(like => {
                  return like.liked_human_id === Number(pet.owner_id)
                }) || liked
                  ? <h1>liked!</h1>
                  : <img className='pawheart2' src='/images/pawheart.png' onClick={clickHandleLike}/>
              }

            </div>
            <div>
              <button className="cssbuttons-io-button" onClick={clickHandleRight}> Next
                <div className="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>
              </button>
            </div>
          </div>
        </div>

      </>
    )
  } else {
    return (
      <div className="dog-card-container">
        <div className="dog-card">
          <h1>BRKMATES</h1>
          <h2>Welp! We ran out of dogs in your area! Please refresh to have another look</h2>
        </div>
      </div>
    )
  }
}

export default Frontpage
