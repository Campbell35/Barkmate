import React, { useState, useEffect } from 'react'
import { getPets, addLike, getHumansByID, getPatsByID, sendPat, updateOwnerPats } from '../api'
import { useSelector, useDispatch } from 'react-redux'
import { setHuman } from '../actions/human'
import Navigation from './Navigation/Navigation'

const Frontpage = () => {
  const [error, setError] = useState('')
  const [pet, setPet] = useState({})
  const [petArr, setPetArr] = useState([])
  const [ind, setInd] = useState(1)
  const [liked, setLiked] = useState(false)
  const [welp, setWelp] = useState(false)
  const [pats, setPats] = useState(0)
  const [patsLeft, setPatsLeft] = useState(true)
  const owner = useSelector(state => state.human)
  const likes = useSelector(state => state.likes)
  const dispatch = useDispatch()

  useEffect(() => {
    getPets(owner.token)
      .then(petsAll => {
        const pets = petsAll.filter(pet => Number(pet.owner_id) !== owner.id)
        const arr = Array.from(Array(pets.length).keys())
        const shuffled = arr
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
        const thePet = pets[shuffled[0]]
        setPetArr(shuffled)
        setPet(thePet)
        return null
      })
      .then(() => {
        return getPatsByID(owner.id, owner.token)
      })
      .then(res => {
        const patsFromDB = res.pats[0].pats
        setPats(patsFromDB)
        if (patsFromDB < 1) {
          setPatsLeft(false)
        } else { setPatsLeft(true) }
        return null
      })
      .catch(err => setError(err.message))
  }, [owner.token])

  async function clickHandleLike () {
    await addLike(owner.id, Number(pet.owner_id), owner.token)
    setLiked(true)
    getHumansByID(21, owner.token)
      .then(res => console.log(res))
      .catch(err => console.log(err.message))
  }

  function clickHandleRight () {
    setLiked(false)
    setInd(ind + 1)
    const newPetInd = petArr[ind]
    if (ind < petArr.length) {
      getPets(owner.token)
        .then(petsAll => {
          const pets = petsAll.filter(pet => Number(pet.owner_id) !== owner.id)
          return setPet(pets[newPetInd])
        })
        .catch(err => setError(err.message) && console.log(error))
    } else {
      setWelp(true)
    }
  }

  async function clickSendPat () {
    await sendPat(pet.id, owner.token)
    await updateOwnerPats(owner.id, owner.pats, owner.token)
    const res = await getPatsByID(owner.id, owner.token)
    const patsFromDB = res.pats[0].pats
    console.log('pats from db ' + patsFromDB)
    console.log('owner pats left ' + owner.pats)
    setPats(patsFromDB)
    if (patsFromDB < 1) {
      setPatsLeft(false)
    } else { setPatsLeft(true) }
    const action = {
      ...owner,
      pats: owner.pats - 1
    }
    dispatch(setHuman(action))
  }

  if (welp === false) {
    return (
      <>
        <div className="dog-card-container">

          <div className="dog-card">
            <h1>BARKMATES</h1>
            {/* <Navigation/> */}
            <img className="dog-card-nav" />
            <img className="dog-card-img" src={pet.images}/>

            <h3> {pet.name} </h3>

            <p> Breed: {pet.breed}   &emsp; &emsp; &emsp; &emsp; &emsp;  Energy Level: {pet.energy_levels} </p>

            <p> {pet.name}:"Hey babes! I am  a little lover boy! Come to bark with me! Woof! Woof! xoxo" </p>

            {/* <p> VIEW PROFILE </p> */}

            <div className="clear"></div>

          </div>

          <div className="container21">
            {patsLeft
              ? <div>
                <button className="button21" onClick={clickSendPat}>
                  <div className="icon21">
                    <svg viewBox="0 0 16 16" className="bi bi-telegram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                    </svg>
                  </div>
                  <p className="hugs">Send Pat</p>
                </button>
                <p>Pats remaining: {pats}</p>
              </div>
              : <p>You ran out of pats! :( Try again tomorrow</p>
            }
            <div>

              {/* <p>Match ME</p> */}
              {!owner.id
                ? <p>loading</p>
                : likes.find(like => {
                  return like.liked_human_id === Number(pet.owner_id)
                }) || liked
                  ? <div className="container123">
                    <img className='pawheart2' src='/images/heart.png'></img>
                    <div className="centered123"><h3>Liked</h3></div>
                  </div>

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
