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

  useEffect(async () => {
    const pet = await getRandomPet()

    setPet(pet)
    getPets()
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
  }, [])

  async function clickHandleLike () {
    await addLike(owner.id, Number(pet.owner_id))
    setLiked(true)
  }

  function clickHandleRight () {
    setLiked(false)
    setInd(ind + 1)
    const newPetInd = petArr[ind]
    if (ind < petArr.length) {
      getPets()
        .then(pets => {
          return setPet(pets[newPetInd])
        })
        .catch(err => setError(err.message))
    } else {
      setWelp(true)
    }
  }
  if (welp === false) {
    return (
      <>
        <div className="dog-card-container">
          <div className="dog-card">
            <h1>BRKMATES</h1>
            <img className="dog-card-nav" src='/images/nav-icon.png'/>
            <img className="dog-card-img" src={pet.images}/>
            {/* <b>//Name :// </b> */}
            <h1> {pet.name} </h1>

            {/* <b>Breed : </b> */}
            <p> {pet.breed} </p>

            {/* <b>Energy Levels: </b> */}
            <p> {pet.energy_levels}</p>

            {/* <b>Description: </b> */}
            <p> Little lover boy!!</p>

            <p> VIEW PROFILE... </p>
            <div>
              <h2>Match ME</h2>
              {!owner.id
                ? <p>loading</p>
                : likes.find(like => {
                  return like.liked_human_id === Number(pet.owner_id)
                }) || liked
                  ? <p>liked!</p>
                  : <img className='pawheart' src='/images/pawheart.png' onClick={clickHandleLike}/>
              }
            </div>

            <div className="clear"></div>

          </div>
          <div>
            <div className="leftSideCard">
              <button>
                <h3>SEND TREATS</h3>

              </button>
            </div>
          </div>

          <div className="rightSideCard">
            <button>
              <h3>SEND PATS</h3>

            </button>
          </div>
        </div>

        <div>

          <img className="rightArrow" src='/images/rightArrow.png' onClick={clickHandleRight}/>

        </div>
        <div>

          <img className="leftArrow" src='/images/leftArrow.png'/>

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
