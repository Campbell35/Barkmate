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
  console.log(owner.token)

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
    // getHumansByID(21, owner.token)
    // .then(res => console.log(res))
    // .catch(err => console.log(err.message))
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
  if (owner.token) {
    return (
      <>
        <div className="dog-card-container">
          <div className="dog-card">
            <Navigation/>
            <img className='logoimg' src='/images/Logo.png'/>
            <img className="dog-card-nav" />
            <img className="dog-card-img" src={pet.images}/>

            <h3> {pet.name} </h3>

            <p> Breed: {pet.breed}   &emsp; &emsp; &emsp; &emsp; &emsp;  Energy Level: {pet.energy_levels} </p>

            <p> {pet.name}: &quot;{pet.quote}&quot; </p>

            {/* <p> VIEW PROFILE </p> */}

            <div className="clear"></div>

          </div>

          <div className="container21">
            {patsLeft
              ? <div>
                <button className="button21" onClick={clickSendPat}>
                  <div className="icon21">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-heart" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z"/>
                      <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg>
                  </div>
                  <p className="hugs">Send Pat</p>
                </button>
                <p className='prtxt'>pats remaining: {pats}</p>
              </div>
              : <div>
                <button className="button22" disabled>
                  <div className="icon21">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-heart" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z"/>
                      <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg>
                  </div>
                  <p className="hugs">Send Pat</p>
                </button>
                <p className='prtxt'>Out of daily pats!</p>
              </div>
            }
            <div>

              {/* <p>Match ME</p> */}
              {!owner.id
                ? <div className='pawheart3'><img className='pawheart3' src='images/dog_walk_loading.gif' alt='loading icon'></img></div>
                : likes.find(like => {
                  return like.liked_human_id === Number(pet.owner_id)
                }) || liked
                  ? <div className="container123">
                    <img className='pawheart2' src='/images/likeme.png'></img>
                    <p className='centered123'>Liked!</p>
                  </div>

                  : <img className='pawheart3' src='/images/likeme.png' onClick={clickHandleLike}/>
              }

            </div>
            {!welp
              ? <div>
                <button className="cssbuttons-io-button" onClick={clickHandleRight}> Next
                  <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                  </div>
                </button>
              </div>
              : <div>
                <button className="cssbuttons-io-button2" disabled> Next
                  <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                  </div>
                </button>
              </div>
            }
          </div>
        </div>
      </>
    )
  } else { return (<div className='loadingIcon'><img className='loadingIcon' src='images/dog_walk_loading.gif' alt='loading icon'></img></div>) }
}

export default Frontpage
